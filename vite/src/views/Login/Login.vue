<template>
  <div class="login-view">
    <card
      :primary="app.theme.primary"
      :secondary="app.theme.border"
      flat>
      <template v-slot:main>
        <div class="title">
          <h2>{{$t('message.text.login')}}</h2>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.username')}}:&nbsp</span>
          <gen-text-box v-model:value="login_.username"
                        text :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        flat l width="250px"></gen-text-box>
        </div>
        <div class="line">
          <span :style="{width: '100px'}">{{$t('message.text.password')}}:&nbsp</span>
          <gen-text-box v-model:value="login_.password"
                        password :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        flat l width="250px"></gen-text-box>
        </div>
        <div class="line">
          <btn-group>
            <gen-btn @click="login"
                     :primary="app.theme.primary"
                     :secondary="app.theme.strong"
                     xl border margin>{{$t('message.button.login')}}</gen-btn>
            <gen-btn :primary="app.theme.primary"
                     :secondary="app.theme.strong"
                     xl border margin>{{$t('message.button.signUp')}}</gen-btn>
          </btn-group>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
import GenTextBox from "@/components/Generic/GenTextBox/GenTextBox.vue";
import Card from "@/components/Generic/Card/Card.vue";
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue";
import GenBtn from "@/components/Generic/GenBtn/GenBtn.vue";
import Loading from "@/components/Generic/Loading/Loading.vue";

import user from "@/api/user/user.js"

export default {
  name: "Login.vue",
  components: {Loading, GenBtn, BtnGroup, Card, GenTextBox, GenBtnFlat},
  props: {
    app: { type: Object }
  },
  emits: ['loginSuccess'],
  data() {
    return {
      login_: {
        username: '',
        password: '',
        loading: false
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
      let formData = new FormData()

      formData.append('username', this.login_.username)
      formData.append('password', this.login_.password)

      user.login(
        formData,
        this.loginSuccess,
        this.loginFailed
      )

      this.login_.loading = true
    },
    loginSuccess(res) {
      console.log(res)
      this.user = res.user
      this.login_.loading = false
      this.$emit('loginSuccess', this.user)
    },
    loginFailed(e) {
      console.log(e)
      this.login_.loading = false
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
      margin: 30px;
    }
    .line {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 20px;
    }
  }
</style>
