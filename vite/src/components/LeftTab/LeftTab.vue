<template>
  <div :class="state ? 'left-tab' : 'left-tab close'" @scroll.stop.prevent="onscroll">
    <vet-list flex>
      <user-control :app="app" @toMe="me"></user-control>
      <on-top-list :app="app" ></on-top-list>
    </vet-list>
  </div>
</template>

<script>
import UserControl from "./children/UserControl.vue";
import VetList from "@/components/Generic/VetList/VetList.vue";
import GenBtn from "@/components/Generic/GenBtn/GenBtn.vue";
import OnTopList from "./children/OnTopList.vue";

export default {
  name: 'LeftTab',
  components: {VetList, GenBtn, UserControl, OnTopList},
  props: {
    state: Boolean,
    app: Object
  },
  data() {
    return {

    }
  },
  methods: {
    me() {
      this.$router.push({name: 'Me'})
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
