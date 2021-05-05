<template>
  <div class="main-tab">
    <top-bar :app="app" @swLeftTab="$emit('swLeftTab')"></top-bar>
    <div class="router-container">
      <loading :app="app" routerMode :listenRouterLevel="2">
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
</template>

<script>
import TopBar from './TopBar/TopBar.vue'
import Loading from "@/components/Generic/Loading/Loading.vue";
import VetList from "@/components/Generic/VetList/VetList.vue";

export default {
  name: 'MainTab',
  components: {VetList, Loading, TopBar },
  props: {
    app: { type: Object }
  },
  data() {
    return {
      home: {
        search: '',
        recentNote: [
          {id: 0, title: 'title1', tags: ['html', 'css', 'js'], desc: 'test1', time: '2022-2-22 22:22'},
          {id: 1, title: 'title2', tags: ['vue', 'vue-router'], desc: 'test2', time: '2022-2-22 22:22'},
          {id: 2, title: 'title3', tags: ['vite'], desc: 'test3', time: '2022-2-22 22:22'},
          {
            id: 3,
            title: 'title4',
            tags: ['vue', 'html', 'resize-observer-polyfill'],
            desc: 'test4',
            time: '2022-2-22 22:22'
          },
        ],
        recentCode: {}
      }
    }
  },
  beforeRouteEnter() {
  }
}
</script>

<style lang="scss" scoped>
  .main-tab {
    height: 100%;
    display: flex;
    position: relative;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;

    .router-container {
      display: flex;
      position: relative;
      flex-flow: row nowrap;
      flex: 1 1 auto;
      justify-content: center;
      align-items: stretch;
    }
  }
</style>
