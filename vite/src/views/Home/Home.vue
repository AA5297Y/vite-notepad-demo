<template>
  <div class="home-view">
    <vet-list flex>
      <div class="layout">
        <welcome :app="app"></welcome>
        <div class="home-container">
          <mini-activity :app="app"></mini-activity>
          <mini-note :app="app"></mini-note>
        </div>
      </div>
    </vet-list>
  </div>
</template>

<script>
import Welcome from "./children/Welcome.vue";
import MiniNote from "./children/MiniNote.vue";
import MiniActivity from "./children/MiniActivity.vue";
export default {
  name: 'Home',
  components: {MiniActivity, MiniNote, Welcome},
  props: {
    app: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
  .home-view {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    padding-top: 1rem;
    justify-content: stretch;
    align-items: stretch;
    overflow: hidden;

    .layout {
      width: 100%;
      display: flex;
      flex: 1 1 auto;
      flex-flow: column nowrap;
      justify-content: stretch;
      align-items: stretch;
      overflow: hidden;

      .home-container {
        width: 100%;
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
