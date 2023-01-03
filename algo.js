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