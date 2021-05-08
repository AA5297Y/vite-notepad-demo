<template>
  <div class="login-view">
    <card :primary="app.theme.primary"
          :secondary="app.theme.border"
          flat>
      <template v-slot:main>
        <div class="title">
          <h2>{{$t('message.text.login')}}</h2>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.username')}}:&nbsp</span>
          <gen-text-box v-model:value="login_.username"
                        text autoComplete
                        :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        flat l width="20rem"></gen-text-box>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.password')}}:&nbsp</span>
          <gen-text-box v-model:value="login_.password"
                        password autoComplete
                        :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        flat l width="20rem"></gen-text-box>
        </div>
      </template>
      <template v-slot:action>
        <div class="line">
          {{login.message ? $t('message.messages.' + login.message) : ''}}
        </div>
        <div class="line">
          <btn-group>
            <gen-btn @click="login"
                     :primary="app.theme.primary"
                     :secondary="app.theme.strong"
                     xl border margin>{{$t('message.button.login')}}</gen-btn>
            <gen-btn @click="signUp"
                     :primary="app.theme.primary"
                     :secondary="app.theme.secondary"
                     xl border margin>{{$t('message.button.signUp')}}</gen-btn>
          </btn-group>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import user from "@/api/user/user.js"

export default {
  name: "Login.vue",
  props: {
    app: { type: Object }
  },
  emits: ['loginSuccess'],
  data() {
    return {
      login_: {
        username: '',
        password: '',
        message: ''
      },
      user: {
        uid: '',
        username: '',
        email: '',
        strictMode: false,
      }
    }
  },
  methods: {
    login() {
      this.login.message = ''

      let formData = new FormData()

      formData.append('username', this.login_.username)
      formData.append('password', this.login_.password)

      user.login(
        formData,
        this.loginSuccess,
        this.loginFailed
      )
    },
    signUp() {
      this.$router.push({ name: 'SignUp' })
    },
    loginSuccess(json) {
      if (json.status === false) {
        this.loginFailed(json.message)
        return
      }
      this.user = json.user
      this.$emit('loginSuccess', this.user)
    },
    loginFailed(e) {
      this.login.message = e
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-view {
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
  }
</style>
