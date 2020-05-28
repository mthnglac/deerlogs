<template>
  <v-row class="fill-height" align="stretch" justify="space-around">
    <v-col cols="12" sm="12" md="5" lg="5" xl="5">
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
            <v-card-title class="custom-text-zone card-title">
              <div id="entry" class="font-weight-black">
                <nuxt-content :class="titleClass" :document="aboutTitle" />
              </div>
            </v-card-title>
            <v-card-text class="custom-text-zone">
              <nuxt-content
                :class="descriptionClass"
                :document="aboutDescription"
              />
            </v-card-text>
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
      v-show="$vuetify.breakpoint.mdAndUp"
      cols="12"
      sm="12"
      md="5"
      lg="5"
      xl="5"
      class="pr-5"
    >
      <v-card
        class="mx-auto"
        width="100%"
        height="100%"
        flat
        color="transparent"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center">
            <WagonDartVader />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ $content }) {
    const aboutTitle = await $content('about/title').fetch()
    const aboutDescription = await $content('about/description').fetch()
    return { aboutTitle, aboutDescription }
  },
  data() {
    return {
      title: 'About Me',
      mainLogoSrc: '/logo-main.png'
    }
  },
  computed: {
    titleClass() {
      return {
        headline: this.$vuetify.breakpoint.xsOnly,
        'display-2': this.$vuetify.breakpoint.smAndUp
      }
    },
    descriptionClass() {
      return {
        'body-2': this.$vuetify.breakpoint.xsOnly,
        'body-1': this.$vuetify.breakpoint.smAndUp
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped lang="scss">
#entry {
  &:before {
    color: #515152;
    font-family: 'URW Chancery L', cursive;
    font-size: 16px;
    font-style: italic;
    display: block;
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
