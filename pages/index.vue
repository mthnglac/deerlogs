<template>
  <v-row class="fill-height" align="stretch" justify="space-around">
    <v-col
      cols="12"
      sm="6"
      md="5"
      lg="5"
      xl="5"
      :style="[$vuetify.breakpoint.xsOnly && { 'z-index': '1' }]"
    >
      <v-card
        class="mx-auto"
        width="100%"
        height="100%"
        flat
        color="transparent"
      >
        <v-row class="fill-height" align="stretch" justify="space-between">
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="start">
            <v-card-text class="custom-top-tags">
              <span class="custom-tags">
                &nbsp;&nbsp;&nbsp;&lt;body&gt;
              </span>
            </v-card-text>
          </v-col>
          <v-spacer />
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center">
            <v-card-text class="custom-text-zone pre-formatted">
              <div id="entry" class="font-weight-black" :class="titleClass">
                <nuxt-content :document="homeTitle" />
              </div>
              <div
                class="text--primary font-weight-thin"
                style="letter-spacing: .4vw;"
              >
                <nuxt-content :document="homeFootNote" />
              </div>
            </v-card-text>
            <v-card-actions class="custom-text-zone">
              <v-btn outlined nuxt to="/contact" color="#08fdd8">
                Contact me
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-spacer />
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="end">
            <v-card-text class="custom-bottom-tags">
              <span class="custom-tags">
                &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br />
                &lt;/html&gt;
              </span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="5"
      lg="5"
      xl="5"
      class="pr-5"
      :style="[
        $vuetify.breakpoint.xsOnly && {
          'z-index': '0',
          position: 'absolute',
          left: '0',
          height: '90%',
          opacity: '.3'
        }
      ]"
    >
      <v-card
        class="mx-auto"
        width="100%"
        height="100%"
        flat
        color="transparent"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-img
              :src="mainLogoSrc"
              alt="Logo"
              contain
              max-width="500"
              aspect-ratio="1.5"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $content }) {
    const homeTitle = await $content('home/title').fetch()
    const homeFootNote = await $content('home/footNote').fetch()
    return { homeTitle, homeFootNote }
  },
  data() {
    return {
      mainLogoSrc: '/logo-main.png'
    }
  },
  computed: {
    titleClass() {
      return {
        headline: this.$vuetify.breakpoint.xsOnly,
        'display-2': this.$vuetify.breakpoint.smAndUp
      }
    }
  }
}
</script>

<style scoped lang="scss">
#entry {
  white-space: pre-line;
  &:before {
    color: #515152;
    font-family: 'URW Chancery L', cursive;
    font-size: 16px;
    font-style: italic;
    content: '<h1>';
  }
  &:after {
    font-family: 'URW Chancery L', cursive;
    color: #515152;
    font-size: 16px;
    font-style: italic;
    content: '</h1>';
  }
}
.custom-text-zone {
  padding-left: 10%;
  &.card-title {
    color: #08fdd8;
  }
}
.custom-tags {
  font-family: 'URW Chancery L', cursive;
  color: #515152;
  font-size: 20px;
  font-style: italic;
}
.custom-top-tags {
  padding: 0;
}
.custom-bottom-tags {
  padding: 0;
}
</style>
