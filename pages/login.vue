<template>
  <v-row align="stretch" justify="center" no-gutters>
    <v-col cols="12" sm="8" md="3" lg="3" xl="3">
      <WagonUserAuthForm :submit-form="loginUser" button-text="Login" />
    </v-col>
  </v-row>
</template>

<script>
import WagonUserAuthForm from '../components/auth/WagonUserAuthForm'
export default {
  name: 'Login',
  components: { WagonUserAuthForm },
  data() {
    return {
      usernameErrors: [],
      passwordErrors: []
    }
  },
  layout: 'login',
  middleware: 'auth',
  methods: {
    loginUser(loginInfo) {
      this.$axios
        .$post('/api/token/', {
          username: loginInfo.username,
          password: loginInfo.password
        })
        .then((resp) => {
          this.$auth.setToken('local', 'Bearer ' + resp.access)
          this.$auth.setRefreshToken('local', resp.refresh)
          this.$axios.setHeader('Authorization', 'Bearer ' + resp.access)
          this.$auth.ctx.app.$axios.setHeader(
            'Authorization',
            'Bearer ' + resp.access
          )
          this.$axios.get('/users/1').then((resp) => {
            this.$auth.setUser(resp.data)
            this.$router.push('/panel')
          })
        })
        .catch((err) => {
          if (err.response) {
            this.usernameErrors = []
            this.passwordErrors = []
            // const status = err.response.data.detail.status
            const {
              response: { status }
            } = err
            if (status === 404) {
              this.usernameErrors = ['That user does not exist']
            } else if (status === 401) {
              this.passwordErrors = ['Invalid password']
            }
          }
        })
    }
  }
}
</script>
