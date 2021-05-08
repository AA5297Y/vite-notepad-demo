<template>
  <div class="top-bar">
    <router-control :app="app"></router-control>
  </div>
</template>

<script>
import RouterControl from "./RouterControl.vue";

export default {
  components: {RouterControl},
  emits: ['swLeftTab'],
  props: {
    app: { type: Object }
  },
  data() {
    return {

    }
  },
  methods: {
    me() {
      this.$router.push({name: 'Me'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-bar {
    width: auto;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    position: sticky;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    color: white;
    z-index: 1;

    transition: all 0.3s;

    .line {
      padding: 10px;
      position: relative;
      flex: 1 1 auto;
      display: flex;
      justify-content: stretch;
      align-items: stretch;
      flex-flow: row nowrap;
    }
    .welcome {
      display: flex;
      flex: 1 1 auto;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>
