<template>
  <v-row class="fill-height" align="stretch" justify="space-around">
    <v-col
      :style="isMobileLetStyleToLeftCard"
      cols="12"
      sm="5"
      md="5"
      lg="5"
      xl="5"
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
            <v-card-text class="custom-text-zone">
              <p id="entry" class="display-2 font-weight-black">
                Hi,<br />
                I'm Metehan,<br />
                web developer.
              </p>
              <div class="text--primary font-weight-thin">
                Full Stack Developer / Django / VueJS
              </div>
            </v-card-text>
            <v-card-actions class="custom-text-zone">
              <v-btn nuxt to="/contact" outlined color="#08fdd8">
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
      :style="isMobileLetStyleToRightCard"
      cols="12"
      sm="5"
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
          <v-col cols="12" dm="12" md="12" lg="12" xl="12" align-self="center">
            <v-img
              :src="mainLogoSrc"
              alt="Logo"
              contain
              max-width="500"
              width="50vw"
              height="56vh"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      mainLogoSrc: '/logo-main.png'
    }
  },
  computed: {
    isMobileLetStyleToLeftCard() {
      if (this.windowWidth < 600) {
        return {
          'z-index': '1',
          position: 'absolute',
          left: '0',
          height: '90%'
        }
      }
      return null
    },
    isMobileLetStyleToRightCard() {
      if (this.windowWidth < 600) {
        return {
          'z-index': '0',
          position: 'relative',
          top: '0%',
          right: '11%',
          bottom: '15%',
          left: '28%'
        }
      }
      return null
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
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
  margin-left: 10%;
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
