<template>
  <div>
    <v-combobox v-model="añoData" :items="años" label="Año" outlined dense></v-combobox>
    <v-combobox v-model="periodoData" :items="periodo" label="Periodo" outlined dense></v-combobox>
    <v-text-field v-model="netoData" label="Neto" aria-required="true" outlined dense></v-text-field>
    <div class="btn-container">
      <v-btn depressed color="primary" @click="calculaIsr()"> Calcular </v-btn>
    </div>
    <v-text-field v-model="brutoData" label="Bruto" outlined dense readonly></v-text-field>
    <!-- <v-text-field v-model="datos.porcentaje" label="Ingreso" aria-required="true" outlined dense></v-text-field>
    <v-text-field v-model="datos.cuota" label="Ingreso" aria-required="true" outlined dense></v-text-field> -->
  </div>
</template>

<script>
import axios from "axios";
import { arrayClass } from "../src/arrayClass";
import { arrayClass2020 } from "../src/arrayClass2020";
import { arrayClass2017 } from "../src/arrayClass2017";

export default {
  name: "FormR",
  props: ['datos'],
  data() {
    return {
      añoData: "",
      periodoData: "",
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
      netoData: "",
      brutoData: "",
      result: null,
    }
  },
  methods: {
    calculaBruto() {
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
          isrObj.limInfe < this.netoData &&
          isrObj.limSup > this.netoData
        ) {
          let limiteI = isrObj.limInfe;
          this.limInfe = limiteI;
          let tasa = isrObj.Porcentaje;
          let cuotaFija = isrObj.Cuota;
          let base = this.netoData - limiteI;
          let impuestoMarginal = base * tasa;
          this.isrData = impuestoMarginal + cuotaFija;
          this.isrData = this.isrData.toFixed(2);
          this.brutoData = this.netoData - this.isrData;
          this.brutoData = this.brutoData.toFixed(2);
          //console.log("$ " + this.isrData.toFixed(2));
          return isrObj;
        }
      });
    },
    calculaIsr() {
      let number = this.netoData * 2
      for (let i = this.netoData; i < number; i++) {
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
          if (
            isrObj.limInfe < i &&
            isrObj.limSup > i
          ) {
            let limiteI = isrObj.limInfe;
            /* this.limInfe = limiteI; */
            let tasa = isrObj.Porcentaje;
            let cuotaFija = isrObj.Cuota;
            let base = i - limiteI;
            let impuestoMarginal = base * tasa;
            this.isrData = impuestoMarginal + cuotaFija;
            this.isrData = this.isrData.toFixed(2);
            let isrData = this.isrData;
            //console.log(isrData);
            this.brutoData = i - isrData;
            this.brutoData = this.brutoData.toFixed(2);
            /* console.log(this.brutoData);
            console.log(this.isrData) */
            let algo = (parseFloat(i) + parseFloat(isrData));
            console.log(algo);
            return isrObj;
          }
        });
      }
    }
  }
};
</script>
