<template>
  <v-app style="background-color: #1d1d1d;" dark>
    <WagonSideBar class="hidden-sm-and-down" />
    <WagonAppBar class="hidden-md-and-up" app />
    <WagonNavigationDrawer />
    <v-content class="pa-0">
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
html {
  overflow-y: visible;
}
</style>
