<template>
  <div class="container">
    <v-col cols="12">
      <v-combobox v-model="añoData" :items="años" label="Año" outlined dense></v-combobox>
      <v-combobox v-model="periodoData" :items="periodo" label="Periodo" outlined dense></v-combobox>
      <v-text-field v-if="periodoData == 'Diario'" v-model="diasData" label="Días a calcular" outlined
        dense></v-text-field>
      <v-text-field v-model="ingresoData" label="Ingreso" aria-required="true" outlined dense></v-text-field>
      <v-btn depressed color="primary" @click="created()"> Calcular </v-btn>
    </v-col>
    <v-col cols="12">
      <v-text-field v-model="isrData" label="ISR" outlined dense readonly></v-text-field>
      <!-- <TextComponent /> -->
    </v-col>
  </div>
</template>

<script src="../src/Form.js"></script>

<style scoped>
@import "../style/Form.css";
</style>
