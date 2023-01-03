<template>
  <div>
    <v-text-field label="Ingreso" aria-required="true" outlined dense></v-text-field>
    <v-text-field label="Ingreso" aria-required="true" outlined dense></v-text-field>
    <v-btn depressed color="primary" @click=""> Calcular </v-btn>
    <!-- <v-text-field v-model="datos.porcentaje" label="Ingreso" aria-required="true" outlined dense></v-text-field>
    <v-text-field v-model="datos.cuota" label="Ingreso" aria-required="true" outlined dense></v-text-field> -->
  </div>
</template>

<script>
export default {
  name: "FormR",
  props: ['datos'],
  components: {

  },
};
</script>
