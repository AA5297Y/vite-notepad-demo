<template>
  <div class="app-container">
    <left-tab :app="app" :state="state"></left-tab>
    <main-tab :app="app" @swLeftTab="$emit('swLeftTab')"></main-tab>
  </div>
</template>

<script>
import LeftTab from "./LeftTab/LeftTab.vue";
import MainTab from "./MainTab/MainTab.vue";

import author from "@/api/user/author.js"
import user from "@/api/user/user.js"

export default {
  name: "App",
  props: {
    app: { type: Object },
    state: { type: Boolean, default: true },
  },
  emits: [ 'swLeftTab', 'setAuthor', 'loginCheckSuccess', 'loginCheckFailed' ],
  data() {
    return {
    }
  },
  components: {MainTab, LeftTab},
  beforeRouteEnter(to, from ,next) {
    let success = function (json) {
      if (json.status === false) {
        failed('')
      }
      next((vm) => {
        vm.$emit('setAuthor', json)
      })
    }

    let failed = function (error) {
      next((vm) => {
        vm.$emit('setAuthor', {})
        vm.$emit('setAuthorDetail', {})
        vm.$router.push({name: '404'})
      })
    }

    let form = new FormData()
    form.append('uid', to.params.id)

    author.getAuthor(
      form,
      success,
      failed
    )
  },
  beforeRouteUpdate(to, from ,next) {
    let success = (json) => {
      if (json.status === false) {
        this.$emit('loginCheckFailed')
      }

      this.$emit('loginCheckSuccess', json)
      next()
    }

    let failed = (error) => {
      this.$emit('loginCheckFailed')
      next()
    }

    user.getLogined(
      {},
      success,
      failed
    )
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
