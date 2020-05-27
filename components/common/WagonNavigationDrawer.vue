<template>
  <v-navigation-drawer
    v-model="rightDrawer"
    :clipped="getClipped"
    :right="right"
    :disable-resize-watcher="disableResizeWatcher"
    width="180"
    style="background-color: #181818;"
    temporary
    fixed
    app
  >
    <v-list flat>
      <v-list-item-group v-model="model" color="#08fdd8">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :ripple="false"
          :to="item.link"
          nuxt
        >
          <v-list-item-icon>
            <v-icon medium>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WagonNavigationDrawer',
  data() {
    return {
      disableResizeWatcher: true,
      model: 0,
      items: [
        { title: 'Home', icon: 'mdi-home-outline', link: '/' },
        { title: 'About', icon: 'mdi-face-outline', link: '/about' },
        { title: 'Skills', icon: 'mdi-cog-outline', link: '/skills' },
        // { title: 'Blog', icon: 'mdi-coffee-outline', link: '/blog' },
        // { title: 'My Work', icon: 'mdi-eye-outline', link: '/portfolio' },
        { title: 'Contact', icon: 'mdi-email-outline', link: '/contact' }
      ],
      right: true
    }
  },
  computed: {
    ...mapGetters({
      getClipped: 'navbar/getClipped'
    }),
    rightDrawer: {
      get() {
        return this.$store.getters['navbar/getRightDrawer']
      },
      set(v) {
        return this.$store.commit('navbar/setRightDrawer', v)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.v-list-item
  &:hover
    & .v-icon
      color: #08fdd8
    & .v-list-item__title
      color: #08fdd8
</style>
