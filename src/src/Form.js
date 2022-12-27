import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      diasData: "",
      añoData: "",
      periodoData: "",
      añoData: "",
      ingresoData: "",
      isrData: "",
      limInf: "",
      años: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      periodo: ["Anual", "Mensual", "Quincenal", "Semanal", "Diario"],
      result: {},
    };
  },
  methods: {
    created() {
      axios
        .get(
          "http://localhost:8081/Isr/año/" +
            this.añoData +
            "/" +
            this.periodoData
        )
        .then((response) => {
          this.result = response.data;
          for (let i = 0; i < response.data.length; i++) {
            let limInf = response.data[i].limInf;
            let porcentaje = response.data[i].porcentaje;
            let cuota = response.data[i].cuota;
            if (this.periodoData === "Diario") {
              this.limInf = limInf;
              let diasT = this.diasData * this.ingresoData;
              let base = diasT - limInf;
              let impuestoMarginal = base * porcentaje;
              this.isrData = impuestoMarginal + cuota;
              this.isrData = this.isrData.toFixed(2);
            } else if (
              response.data[i].limInf < this.ingresoData &&
              response.data[i].limSup > this.ingresoData
            ) {
              this.limInf = limInf;
              let base = this.ingresoData - limInf;
              let impuestoMarginal = base * porcentaje;
              this.isrData = impuestoMarginal + cuota;
              this.isrData = this.isrData.toFixed(2);
            }
          }
          /* if (limInf < this.ingresoData && limSup > this.ingresoData) {
            let porcentaje = this.result.porcentaje;
            let base = this.ingresoData - limInf;
            let impuestoMarginal = base * porcentaje;
            let isrData = impuestoMarginal + cuota;
            isrData = isrData.toFixed(2);
            console.log(isrData);
          } */
        });
    },
  },
};

/* 
calculaISR() {
      let año = {
        2015: arrayClass2017,
        2016: arrayClass2017,
        2017: arrayClass2017,
        2018: arrayClass2020,
        2019: arrayClass2020,
        2020: arrayClass2020,
        2021: arrayClass,
        2022: arrayClass,
      };

      let selecAño = año[this.añoData];
      //let selec = "Mensual";
      let periodo = {
        Anual: selecAño.arrayIsrAnual,
        Mensual: selecAño.arrayIsrMen,
        Quincenal: selecAño.arrayIsrQuin,
        Semanal: selecAño.arrayIsrSem,
        Diario: selecAño.arrayIsrDiario,
      };

      let selecPeriodo = periodo[this.periodoData];
      selecPeriodo.map((isrObj) => {
        if (
          isrObj.limInfe < this.ingresoData &&
          isrObj.limSup > this.ingresoData
        ) {
          let limiteI = isrObj.limInfe;
          this.limInfe = limiteI;
          let tasa = isrObj.Porcentaje;
          let cuotaFija = isrObj.Cuota;
          let base = this.ingresoData - limiteI;
          let impuestoMarginal = base * tasa;
          this.isrData = impuestoMarginal + cuotaFija;
          this.isrData = this.isrData.toFixed(2);
          //console.log("$ " + this.isrData.toFixed(2));
          return isrObj;
        }
      });
      //console.log(selecPeriodo);
    },
*/
