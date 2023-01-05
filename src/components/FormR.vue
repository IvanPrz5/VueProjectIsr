<template>
  <div>
    <v-combobox
      v-model="añoData"
      :items="años"
      label="Año"
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="periodoData"
      :items="periodo"
      label="Periodo"
      outlined
      dense
    ></v-combobox>
    <v-text-field
      v-model="netoData"
      label="Neto"
      aria-required="true"
      outlined
      dense
    ></v-text-field>
    <div class="btn-container">
      <v-btn depressed color="primary" @click="calculaIsr()"> Calcular </v-btn>
    </div>
    <v-text-field
      class="isrData"
      v-model="isrData"
      label="Isr"
      outlined
      dense
      readonly
    ></v-text-field>
    <v-text-field
      v-model="brutoData"
      label="Bruto"
      outlined
      dense
      readonly
    ></v-text-field>
    <!-- <v-text-field v-model="datos.porcentaje" label="Ingreso" aria-required="true" outlined dense></v-text-field>
    <v-text-field v-model="datos.cuota" label="Ingreso" aria-required="true" outlined dense></v-text-field> -->
  </div>
</template>

<script>
import { allGeneratedPositionsFor } from "@jridgewell/trace-mapping";
import axios from "axios";

export default {
  name: "FormR",
  props: ["datos"],
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
      periodo: ["Mensual", "Quincenal", "Semanal", "Diario"],
      netoData: "",
      brutoData: "",
      isrData: "",
      result: null,
    };
  },
  methods: {
    calculaIsr() {
      //this.$refs.created();
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
            let netoParse = parseFloat(this.netoData);
            let number = this.netoData * 2;
            let limInf = response.data[i].limInf;
            let porcentaje = response.data[i].porcentaje;
            let cuota = response.data[i].cuota;
            if (
              response.data[i].limInf < number &&
              response.data[i].limSup > number
            ) {
              this.limInf = limInf;
              let base = number - limInf;
              let impuestoMarginal = base * porcentaje;
              let isrData = impuestoMarginal + cuota;
              number = netoParse + isrData;
              console.log(number.toFixed(2));
            }
          }
        })
        .catch((error) => {
          /* alert("Error"); */
        });
    },
  },
};
</script>

<style scoped>
@import "../style/FormR.css";
</style>
