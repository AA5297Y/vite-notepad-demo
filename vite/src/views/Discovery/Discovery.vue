<template>
  <div class="discovery-view">
    <div class="layout">
      <search-container :app="app"></search-container>
      <div class="discovery-container">
        <search-results :app="app"></search-results>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Discovery",
  props: {
    app: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
.discovery-view {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
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

    .discovery-container {
      width: 100%;
      display: flex;
      position: relative;
      flex: 1 1 auto;
      justify-content: stretch;
      align-items: stretch;
      overflow: scroll;

      padding-bottom: 0;
      background: white;
    }
  }
}
</style>
