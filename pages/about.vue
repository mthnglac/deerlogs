<template>
  <v-row class="fill-height" align="stretch" justify="space-around">
    <v-col cols="12" sm="12" md="5" lg="5" xl="5">
      <v-card
        :style="isMobileLetStyleToLeftCard"
        class="mx-auto"
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
              <div id="entry">
                <div class="display-2 font-weight-black">
                  {{ pageContent.pageTitle }}
                </div>
              </div>
            </v-card-title>
            <v-card-text class="custom-text-zone">
              {{ pageContent.pageDescription }}
            </v-card-text>
          </v-col>
          <v-col
            v-show="$vuetify.breakpoint.xsOnly"
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
            <v-img
              contain
              style="max-width:95%;margin-top: 12%; margin-bottom: 10%"
              src="https://jacekjeznach.com/wp-content/themes/jj/img/timeline.png"
              alt="experiences"
              aspect-ratio="2"
            />
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
import WagonDartVader from '../components/snippets/WagonDartVader'
export default {
  name: 'About',
  components: {
    WagonDartVader
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      },
      mainLogoSrc: '/logo-main.png'
    }
  },
  computed: {
    isMobileLetStyleToLeftCard() {
      if (this.windowSize.x > 600) {
        return {
          width: '100%',
          height: '100%'
        }
      }
      return null
    },
    pageContent() {
      return this.$store.getters['about/getPageContent']
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
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
