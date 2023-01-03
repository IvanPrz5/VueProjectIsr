<template>
  <v-container class="container">
    <v-col class="netoForm" cols="12">
      <v-combobox v-model="añoData" :items="años" label="Año" outlined dense></v-combobox>
      <v-combobox v-model="periodoData" :items="periodo" label="Periodo" outlined dense></v-combobox>
      <v-text-field v-if="periodoData == 'Diario'" v-model="diasData" label="Días a calcular" outlined
        dense></v-text-field>
      <v-text-field v-model="ingresoData" label="Ingreso" aria-required="true" outlined dense></v-text-field>
      <div class="btn-container">
        <v-btn depressed color="primary" @click="created()"> Calcular </v-btn>
      </div>
      <v-text-field v-model="isrData" label="ISR" outlined dense readonly></v-text-field>
      <v-text-field v-model="netoData" label="Neto" outlined dense readonly></v-text-field>
    </v-col>
    <v-col class="brutoForm" cols="12">
      <FormR />
    </v-col>
  </v-container>
</template>

<script src="../src/Form.js"></script>

<style scoped>
@import "../style/Form.css";
</style>
