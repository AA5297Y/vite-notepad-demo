<template>
  <div class="line">
    <btn-group v-if="app.login">
      <gen-btn-flat v-if="app.author.uid === app.user.uid"
                    :primary="app.theme.secondary"
                    :secondary="app.theme.primary"
                    border transparent l>
        {{$t('message.button.profile')}}
      </gen-btn-flat>
      <gen-btn-flat v-if="app.author.uid !== app.user.uid"
                    :value="app.author.follow"
                    :primary="app.theme.secondary"
                    :secondary="app.theme.primary"
                    border transparent l>
        {{app.author.follow ? $t('message.button.disFollow') : $t('message.button.follow')}}
      </gen-btn-flat>
    </btn-group>
    <btn-group v-if="!app.login">
      <gen-btn-flat @click="login"
                    :primary="app.theme.secondary"
                    :secondary="app.theme.primary"
                    border transparent l>
        {{$t('message.button.login')}}
      </gen-btn-flat>
    </btn-group>
  </div>
</template>

<script>
export default {
  name: "AuthorOperations",
  props: {
    app: {type: Object}
  },
  methods: {
    login() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
  .line {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
