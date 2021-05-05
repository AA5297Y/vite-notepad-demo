<template>
  <div class="filter-container">
    <btn-group>
      <gen-btn-flat :value="/User\/Messages\/MyMessages/.test($route.name)" @click="changeRouter('User/Messages/MyMessages')"
                    :primary="app.theme.secondary" :secondary="app.theme.primary" transparent l>
        <span class="message-icon iconfont icon-email"></span>
        <span>{{$t('message.router.message.myMessage')}}</span>
      </gen-btn-flat>
      <gen-btn-flat :value="/User\/Messages\/Notifications/.test($route.name)" @click="changeRouter('User/Messages/Notifications')"
                    :primary="app.theme.secondary" :secondary="app.theme.primary" transparent l>
        <span class="message-icon iconfont icon-notification"></span>
        <span>{{$t('message.router.message.notification')}}</span>
      </gen-btn-flat>
    </btn-group>
  </div>
</template>

<script>
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue";
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
export default {
  name: "MessageRouter",
  components: {GenBtnFlat, BtnGroup},
  props: {
    app: { type: Object },
    router: { type: String }
  },
  data() {
    return {

    }
  },
  methods: {
    changeRouter(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  margin-top: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;

  .message-icon {
    margin-right: .3rem;
  }
}
</style>
