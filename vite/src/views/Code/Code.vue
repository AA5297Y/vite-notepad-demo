<template>
  <div class="code-view">
    <div class="layout">
      <div class="codes-container">
        <code-container :app="app"></code-container>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "./children/CodeContainer.vue";
export default {
  name: "Code",
  components: { CodeContainer },
  props: {
    app: { type: Object }
  },
  data() {
    return {
      tags: ['html', 'css', 'js', 'vue', 'vue-router', 'vite', 'lodash', 'resize-observer-polyfill', 'spring-boot'],
      tagFilter: []
    }
  },
  methods: {
    updateTagFilter(filter) {
      this.tagFilter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-view {
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

      .codes-container {
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
