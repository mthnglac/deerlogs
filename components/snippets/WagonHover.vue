<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`${hover ? 12 : 'blue'}`"
      class="mx-auto"
      width="344"
    >
      <v-card-title>
        <div>
          <span class="headline">Cafe Badilico</span>
          <div class="d-flex">
            <v-rating
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2"></div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'WagonHover'
}
</script>

<style scoped lang="sass">
.blue
  background-color: yellow
</style>
