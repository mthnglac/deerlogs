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

<script>
import WagonSideBar from '~/components/common/WagonSideBar'
import WagonNavigationDrawer from '~/components/common/WagonNavigationDrawer'
import WagonAppBar from '~/components/common/WagonAppBar'
export default {
  components: {
    WagonAppBar,
    WagonSideBar,
    WagonNavigationDrawer
  }
}
</script>

<style lang="scss">
html {
  overflow-y: visible;
}
</style>
