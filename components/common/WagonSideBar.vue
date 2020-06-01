<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    :floating="floating"
    :disable-resize-watcher="disableResizeWatcher"
    :width="navigationDrawerWidth"
    permanent
    app
  >
    <v-img height="100%" style="background-color: #181818;">
      <v-row
        class="fill-height"
        align="stretch"
        justify="space-between"
        no-gutters
      >
        <v-col align-self="start">
          <v-list flat style="padding: 0 0">
            <v-list-item
              :ripple="false"
              style="background-color: black; padding-bottom: 15%; padding-top: 15%"
              @click="$router.push('/')"
            >
              <v-list-item-avatar id="list-avatar" size="70" tile>
                <v-img :src="avatarImgSrc" contain alt="logo" />
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
        <v-col align-self="center">
          <v-list flat>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.link"
              :ripple="false"
              class="v-list-item pages"
              nuxt
              link
            >
              <v-list-item-icon>
                <v-icon size="27">{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
        <v-col align-self="end">
          <v-list flat>
            <v-list-item
              v-for="(item, i) in itemsSocial"
              :key="i"
              :href="item.link"
              :ripple="false"
              target="_blank"
              class="v-list-item social"
              link
            >
              <v-list-item-icon>
                <v-icon size="17">{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'WagonSideBar',
  data() {
    return {
      drawer: true,
      floating: true,
      disableResizeWatcher: true,
      navigationDrawerWidth: 60,
      // bgImg: '/bg-space.jpg',
      avatarImgSrc: '/logo_deer_no_shadow.png',
      items: [
        { title: 'Home', icon: 'mdi-home-outline', link: '/' },
        { title: 'About', icon: 'mdi-face-outline', link: '/about' },
        { title: 'Skills', icon: 'mdi-cog-outline', link: '/skills' },
        // { title: 'Blog', icon: 'mdi-coffee-outline', link: '/blog' },
        // { title: 'My Work', icon: 'mdi-eye-outline', link: '/portfolio' },
        { title: 'Contact', icon: 'mdi-email-outline', link: '/contact' }
      ],
      itemsSocial: [
        {
          title: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/metehanglc'
        },
        {
          title: 'GitHub',
          icon: 'mdi-github',
          link: 'https://github.com/mthnglac'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/'
        },
        {
          title: 'SoundCloud',
          icon: 'mdi-soundcloud',
          link: 'https://soundcloud.com/metehan-g-la'
        }
        // {
        //   title: 'Facebook',
        //   icon: 'mdi-facebook',
        //   link: 'https://www.facebook.com/metehan.gulac'
        // }
        // { title: 'Feed', icon: 'mdi-rss', link: 'https://google.com' }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
#app-drawer
  #list-avatar
    position: relative
    right: 75%
  .v-list-item
    &.pages
      padding-left: 29%
    &.social
      padding-left: 35%
    & .v-icon
      color: #4d4d4e
      &:hover
        color: #08fdd8
    &--active
      & .v-icon
        color: #08fdd8
</style>
