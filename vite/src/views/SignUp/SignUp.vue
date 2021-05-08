<template>
  <div class="signup-view">
    <card :primary="app.theme.primary"
          :secondary="app.theme.border"
          flat>
      <template v-slot:main>
        <div class="title">
          <h2>{{$t('message.text.signUp')}}</h2>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.email')}}:&nbsp</span>
          <gen-text-box v-model:value="signUp_.email"
                        v-model:valid="signUp_.emailValid"
                        text :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        :validation="{
                          regExp: /[\w\.\-]+@\w+\.\w/,
                          errorMessage: $t('message.text.emailFormatError')
                        }"
                        flat l width="20rem"></gen-text-box>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.username')}}:&nbsp</span>
          <gen-text-box v-model:value="signUp_.username"
                        v-model:valid="signUp_.usernameValid"
                        text :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        :validation="{
                          regExp: /\S{6,32}/,
                          errorMessage: $t('message.text.usernameFormatError')
                        }"
                        flat l width="20rem"></gen-text-box>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.password')}}:&nbsp</span>
          <gen-text-box v-model:value="signUp_.password"
                        v-model:valid="signUp_.passwordValid"
                        password :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        :validation="{
                          regExp: /[\w\,\?\.\+\-\*\//]{8,32}/,
                          errorMessage: $t('message.text.passwordFormatError')
                        }"
                        flat l width="20rem"></gen-text-box>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.repeatPassword')}}:&nbsp</span>
          <gen-text-box v-model:value="signUp_.repeatPassword"
                        password :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        :validation="{
                          regExp: /[\w\,\?\.\+\-\*\//]{8,32}/,
                          errorMessage: $t('message.text.passwordFormatError')
                        }"
                        flat l width="20rem"></gen-text-box>
        </div>
        <div class="warring">
          {{compRepeatPassword ? '' : $t('message.text.repeatPasswordNotEqual')}}
        </div>
        <div v-if="signUp_.message !== ''" class="line warring">

        </div>
      </template>
      <template v-slot:action>
        <div class="line">
          <btn-group>
            <gen-btn :disabled="!compValid"
                     @click="signUp"
                     :primary="app.theme.primary"
                     :secondary="app.theme.strong"
                     xl border margin>{{$t('message.button.signUp')}}</gen-btn>
            <gen-btn @click="login"
                     :primary="app.theme.primary"
                     :secondary="app.theme.secondary"
                     xl border margin>{{$t('message.button.login')}}</gen-btn>
          </btn-group>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import user from "@/api/user/user.js"

export default {
  name: "SignUp",
  props: {
    app: {type: Object}
  },
  data() {
    return {
      signUp_: {
        email: '',
        emailValid: false,
        username: '',
        usernameValid: false,
        password: '',
        passwordValid: false,
        repeatPassword: '',
        valid: false,
        message: ''
      }
    }
  },
  computed: {
    compRepeatPassword() {
      return this.signUp_.repeatPassword === this.signUp_.password
    },
    compValid() {
      if (this.signUp_.emailValid
        && this.signUp_.usernameValid
        && this.signUp_.passwordValid
        && this.compRepeatPassword
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    signUpSuccess(json) {
      console.log(json)
      this.signUp_.message = json.message
    },
    signUpFailed(e) {
      console.log(e)
      this.signUp_.message = e.message
    },
    signUp() {
      this.message = ''

      if (this.compValid) {

        let formData = new FormData()

        formData.append('email', this.signUp_.email)
        formData.append('username', this.signUp_.username)
        formData.append('password', this.signUp_.password)

        user.signUp(
          formData,
          this.signUpSuccess,
          this.signUpFailed
        )
      }
    },
    login() {
      this.$router.push({ name: 'Login' })
    },
  }
}
</script>

<style lang="scss" scoped>
.signup-view {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .title {
    margin: 4rem;
  }
  .line {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem 1rem;
  }
  .warring {
    font-size: .8rem;
    color: indianred;
  }
}
</style>
