<template>
  <div class="app" @mousemove="onMouseMove">
    <div class="background" :style="{
        left: left + '%'
    }"></div>
    <loading :app="app" router-mode :listenRouterLevel="1">
      <template v-slot="slotProps">
        <router-view v-slot="{Component}"
                     :app="app" :state="leftTab"
                     @swLeftTab="leftTab = !leftTab"
                     @loginSuccess="loginSuccess"
                     @loginCheckSuccess="loginCheckSuccess"
                     @loginCheckFailed="loginCheckFailed"
                     @setAuthor="setAuthor">
          <transition name="show-hide">
            <component v-if="slotProps.loading" :is="Component"></component>
          </transition>
        </router-view>
      </template>
    </loading>
  </div>
</template>

<script>
import Loading from "@/components/Generic/Loading/Loading.vue";
import _ from "lodash";

export default {
  name: 'App',
  components: {Loading},
  emits: ['swLeftTab'],
  data() {
    return {
      left: -10,
      leftTab: true,
      app: {
        theme: {
          card: '#eaeaea',
          primary: 'white',
          secondary: 'grey',
          border: '#ababab',
          strong: 'deepskyblue',
          text: 'dimgrey'
        },
        login: false,
        user: {},
        author: {}
      }
    }
  },
  methods: {
    onMouseMove: _.throttle(
      function(event) {
        let offset = (event.clientX - (window.innerWidth / 2)) / window.innerWidth
        this.left = -10 + (-offset * 10)
      }
    ),
    swLeftTab() {
      this.leftTab = !this.leftTab
    },
    loginSuccess(user) {
      this.app.user = user
      this.app.login = true
      if (!this.app.author.uid) {
        this.$router.push({name: 'Author/Home', params: {id: this.app.user.uid}})
      } else {
        this.$router.push({name: 'Author/Home', params: {id: this.app.author.uid}})
      }
    },
    loginCheckSuccess(user) {
      this.app.user = user
      this.app.login = true
    },
    loginCheckFailed() {
      this.app.user = {}
      this.app.login = false
    },
    setAuthor(json) {
      this.app.author = json
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .background {
    position: absolute;
    width: 120%;
    height: 100%;
    background: url("@/assets/image/screen-1.jpg");
    background-size: cover;
  }
}
</style>
