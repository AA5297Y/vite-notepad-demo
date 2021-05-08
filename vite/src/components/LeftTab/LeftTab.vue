<template>
  <div :class="state ? 'left-tab' : 'left-tab close'" @scroll.stop.prevent="onscroll">
    <vet-list flex>
      <author-control :app="app"></author-control>
      <author-operations :app="app"></author-operations>
      <on-top-list :app="app"></on-top-list>
    </vet-list>
  </div>
</template>

<script>
import AuthorControl from "./children/AuthorControl.vue";
import OnTopList from "./children/OnTopList.vue";
import AuthorOperations from "./children/AuthorOperations.vue";
export default {
  name: 'LeftTab',
  components: {AuthorControl, OnTopList, AuthorOperations},
  props: {
    state: Boolean,
    app: Object
  },
  data() {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
  .left-tab {
    width: 100%;
    max-width: 360px;
    height: 100%;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;

    background: none;
    overflow: auto;
    z-index: 2;
  }
  .close {
    margin-left: -400px;
    box-shadow: none;
  }
</style>
