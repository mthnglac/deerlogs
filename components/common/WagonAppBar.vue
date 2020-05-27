<template>
  <v-app-bar
    :clipped="getClipped"
    flat
    style="background-color: #181818; padding-left: 0; flex: 0 1 auto;"
  >
    <v-avatar tile>
      <v-img
        :src="avatarImgSrc"
        contain
        width="55"
        @click.stop="$router.push('/')"
      />
    </v-avatar>
    <v-spacer />
    <v-spacer />
    <v-toolbar-items
      v-for="item in items"
      :key="item.id"
      class="hidden-xs-only px-3"
      nuxt
    >
      <v-btn :ripple="false" :to="item.link" class="px-5" icon nuxt>
        <v-icon class="icon-page" size="30">{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items
      v-for="item in itemsSocial"
      :key="item.id"
      class="hidden-xs-only px-0"
    >
      <v-btn :href="item.link" icon target="_blank">
        <v-icon size="15">{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-btn
      v-show="$vuetify.breakpoint.xsOnly"
      icon
      large
      @click.stop="rightDrawer = !rightDrawer"
    >
      <v-icon color="#08fdd8" size="35">mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WagonAppBar',
  data() {
    return {
      avatarImgSrc: '/logo_deer_no_shadow.png',
      items: [
        { title: 'Home', icon: 'mdi-home-outline', link: '/' },
        { title: 'About', icon: 'mdi-face-outline', link: '/about' },
        { title: 'Skills', icon: 'mdi-cog-outline', link: '/skills' },
        // { title: 'Blog', icon: 'mdi-coffee-outline', link: '/blog' },
        // { title: 'My Work', icon: 'mdi-eye-outline', link: '/portfolio' },
        { title: 'Contact', icon: 'mdi-email-outline', link: '/contact' },
        { title: 'Contact', icon: 'mdi-email-outline', link: '/panel' }
      ],
      itemsSocial: [
        {
          title: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/metehanglc'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/'
        },
        {
          title: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/metehan.gulac'
        },
        { title: 'Feed', icon: 'mdi-rss', link: 'https://google.com' }
      ]
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

<style scoped lang="scss">
.v-btn {
  color: #4d4d4e !important;
  &:before {
    color: transparent;
  }
  &--active {
    color: #08fdd8 !important;
  }
}
</style>
