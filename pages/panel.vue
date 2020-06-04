<template>
  <v-row class="fill-height" align="stretch" justify="space-around">
    <v-col cols="12" sm="12" md="10" lg="10" xl="9" align-self="center">
      <nuxt-child />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Panel',
  middleware: 'auth',
}
</script>
