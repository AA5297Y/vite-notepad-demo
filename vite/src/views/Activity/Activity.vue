<template>
  <div class="activity-view">
    <div class="layout">
      <activity-filter :app="app" :selected="selected" @update:selected="updateSelection"></activity-filter>
      <div class="activity-container">
        <loading :app="app" routerMode :listenRouterLevel="3" :listenParams="['uid']">
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
import VetList from "@/components/Generic/VetList/VetList.vue";
import ActivityRouter from "../Message/children/MessageRouter.vue";
import ActivityContainer from "./children/ActivityContainer.vue";
import ActivityFilter from "./children/ActivityFilter.vue";
import Loading from "@/components/Generic/Loading/Loading.vue"
export default {
  name: "Activity",
  components: {Loading, ActivityFilter, ActivityContainer, ActivityRouter, VetList},
  props: {
    app: { type: Object }
  },
  data() {
    return {
      selected: {}
    }
  },
  methods: {
    updateSelection(target) {
      this.selected = target
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-view {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: stretch;

  .layout {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: stretch;
    align-items: stretch;
    overflow: hidden;

    padding-top: 1rem;

    .activity-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1 1 auto;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;

      background: white;
    }
  }
}
</style>
