import FormR from "../components/FormR.vue";
import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      isrData2: "",
      netoData: "",
      diasData: "",
      añoData: "",
      periodoData: "",
      añoData: "",
      ingresoData: "",
      isrData: "",
      limInf: "",
      años: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
      periodo: ["Anual", "Mensual", "Quincenal", "Semanal", "Diario"],
      result: null,
      mostrar: { limInf: 0, cuota: 0, porcentaje: 0 },
    };
  },
  components: { FormR },
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
          for (let i = 0; i < this.result.length; i++) {
            //console.log(response.data[i].limInf);
            let limInf = response.data[i].limInf;
            let porcentaje = response.data[i].porcentaje;
            let cuota = response.data[i].cuota;
            if (
              response.data[i].limInf < this.ingresoData &&
              response.data[i].limSup > this.ingresoData
            ) {
              this.mostrar = limInf;
              this.limInf = limInf;
              let base = this.ingresoData - limInf;
              let impuestoMarginal = base * porcentaje;
              this.isrData = impuestoMarginal + cuota;
              this.isrData = this.isrData.toFixed(2);
              this.netoData = this.ingresoData - this.isrData;
              this.netoData = this.netoData.toFixed(2);
            }
          }
        });
    },
  },
};
