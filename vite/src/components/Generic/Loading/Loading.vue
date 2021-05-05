<template>
  <slot :loading="!loading_"></slot>
  <transition name="show-hide">
    <div v-if="loading_"
         class="loading-container">
      <div class="loading-icon-container">
        <div class="loading-content"
             :style="{borderColor: app.theme.card, borderTopColor: app.theme.strong}"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import '../animation.css'

export default {
  name: "Loading",
  props: {
    app: { type: Object },
    loading: { type: Object },
    routerMode: { type: Boolean, default: false },
    listenRouterLevel: { type: Number, default: 1 },
    listenParams: { type: Array, default: [] }
  },
  data() {
    return {
      loading_: false
    }
  },
  methods: {
    routeCompare(from, to) {
      if (from.name === undefined) {
        return true
      }

      let fromLevels = from.name.split('/')
      let toLevels = to.name.split('/')

      if (fromLevels[this.listenRouterLevel - 1] !== toLevels[this.listenRouterLevel - 1]) {
        return true
      }

      for (let i = 0; i < this.listenParams.length; i++) {
        let paramName = this.listenParams[i]

        let fromParam = from.params[paramName]
        let toParam = to.params[paramName]

        if (fromParam !== toParam) {
          return true
        }
      }

      return false
    },
    routeLeave(to, from, next) {
      if (this.routeCompare(from, to)) {
        this.loading_ = true
      }
      next()
    },
    routeEnter(to, from) {
      if (this.routeCompare(from, to)) {
        setTimeout(
          () => this.loading_ = false,
          700
        )
      }
    }
  },
  mounted() {
    if (this.routerMode) {
      this.$router.beforeEach(
        this.routeLeave
      )
      this.$router.afterEach(
        this.routeEnter
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-container {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;

    z-index: 1;

    .loading-icon-container {
      width: 4rem;
      height: 4rem;
      position: relative;
      top: 50%;
      left: 50%;
      margin-top: -2rem;
      margin-left: -2rem;
      overflow: hidden;

      transform: rotate(45deg);

      .loading-content {
        width: 4rem;
        height: 4rem;
        position: relative;
        border: solid .2rem;
        border-radius: 50%;

        animation: loading-icon 2s linear infinite;
      }
    }
  }
</style>
