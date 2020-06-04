<template>
  <form @keydown.enter="submitForm(userInfo)">
    <v-text-field
      v-model="userInfo.username"
      :error-messages="usernameErrors"
      label="Username"
      required
      @input="$v.userInfo.username.$touch()"
      @blur="$v.userInfo.username.$touch()"
    />
    <v-text-field
      v-model="userInfo.password"
      :error-messages="passwordErrors"
      label="Password"
      type="password"
      required
      @input="$v.userInfo.password.$touch()"
      @blur="$v.userInfo.password.$touch()"
    />
    <v-btn class="mr-4" @click="submit">{{ buttonText }}</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'WagonUserAuthForm',
  mixins: [validationMixin],
  validations: {
    userInfo: {
      username: { required },
      password: { required },
    },
  },
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userInfo: {
        username: 'stranger',
        password: 'wwlaldsd123',
      },
    }
  },
  computed: {
    usernameErrors() {
      const errors = []
      if (!this.$v.userInfo.username.$dirty) return errors
      !this.$v.userInfo.username.required &&
        errors.push('Username is required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.userInfo.password.$dirty) return errors
      !this.$v.userInfo.password.required && errors.push('Password is required')
      return errors
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      this.submitForm(this.userInfo)
    },
    clear() {
      this.$v.$reset()
      this.userInfo.username = ''
      this.userInfo.password = ''
    },
  },
}
</script>
