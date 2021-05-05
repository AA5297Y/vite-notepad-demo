<template>
  <div class="message-view">
    <div class="layout">
      <message-router :app="app"></message-router>
      <div class="message-container">
        <loading :app="app" routerMode :listenRouterLevel="3">
          <template v-slot="slotProps">
            <router-view v-slot="{Component}" :app="app">
              <transition name="show-hide">
                <component v-if="slotProps.loading" :is="Component"></component>
              </transition>
            </router-view>
          </template>
        </loading>
      </div>
    </div>
  </div>
</template>

<script>
import MessageRouter from "./children/MessageRouter.vue";
import Loading from "@/components/Generic/Loading/Loading.vue";
export default {
  name: "Message",
  components: { Loading, MessageRouter },
  props: {
    app: { type: Object }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.message-view {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;

  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: stretch;
    align-items: stretch;
    overflow: hidden;

    .message-container {
      width: 100%;
      display: flex;
      position: relative;
      flex: 1 1 auto;
      justify-content: center;
      align-items: stretch;
      overflow: hidden;

      padding-bottom: 0;
      background: white;
    }
  }
}
</style>
