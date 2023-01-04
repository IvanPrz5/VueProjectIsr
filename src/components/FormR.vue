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
      v-model="brutoData"
      label="Bruto"
      outlined
      dense
      readonly
    ></v-text-field>
    <v-text-field
      v-model="brutoData2"
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
      periodo: ["Anual", "Mensual", "Quincenal", "Semanal", "Diario"],
      netoData: "",
      brutoData: "",
      brutoData2: "",
      result: null,
    };
  },
  methods: {
    calculaIsr() {
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
            let parse = parseFloat(this.netoData);
            let number = parseFloat(this.netoData) * 2;
            for (let j = parse; j <= number; j += 0.01) {
              let limInf = response.data[i].limInf;
              let porcentaje = response.data[i].porcentaje;
              let cuota = response.data[i].cuota;
              if (response.data[i].limInf < j && response.data[i].limSup > j) {
                this.limInf = limInf;
                let base = j - limInf;
                let impuestoMarginal = base * porcentaje;
                let isrData = impuestoMarginal + cuota;
                this.brutoData = j - isrData;
                this.brutoData = this.brutoData.toFixed(2);
                /* console.log(j.toFixed(2));
                console.log(isrData.toFixed(2))
                console.log(this.brutoData) */
                if (this.netoData === this.brutoData) {
                  this.brutoData2 = j.toFixed(2);
                }
              }
            }
          }
        });
    },
  },
};
</script>
