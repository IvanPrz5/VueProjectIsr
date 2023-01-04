/* for (let i = 0; i < this.result.length; i++) {
  //console.log(response.data[i].limInf);
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
    this.netoData = this.ingresoData - this.isrData;
    this.netoData = this.netoData.toFixed(2); */


/* calculaIsr() {
  let parse = parseFloat(this.netoData);
  let number = parseFloat(this.netoData) * 2;
  for (let i = parse; i <= number; i += 0.01) {
    //console.log(i);
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
      //let i = this.netoData;
      if (isrObj.limInfe < i && isrObj.limSup > i) {
        let limiteI = isrObj.limInfe;
        //this.limInfe = limiteI;
        let tasa = isrObj.Porcentaje;
        let cuotaFija = isrObj.Cuota;
        let base = i - limiteI;
        let impuestoMarginal = base * tasa;
        let isrData = impuestoMarginal + cuotaFija;
        this.brutoData = i - isrData;
        //let parse2 = parseFloat(temporal);
        this.brutoData = this.brutoData.toFixed(2);
        console.log(i.toFixed(2));
        console.log(isrData.toFixed(2));
        console.log(this.brutoData);
        if (this.netoData === this.brutoData) {
          this.brutoData2 = i.toFixed(2);
        }
        return isrObj;
      }
    });
  }
},
 */