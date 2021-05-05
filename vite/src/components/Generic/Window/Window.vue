<template>
  <slot name="trigger" :trigger="open"></slot>
  <transition name="show-hide">
    <div v-if="state" class="window">
      <div v-if="state" class="window-mask" @click="strict ? '' : close"></div>
      <div class="window-container">
        <card primary="white" secondary="lightgrey" border flat no-shadow>
          <template v-slot:head>
            <spacing :style="{color: 'grey'}">{{title}}</spacing>
            <gen-btn-flat @click="close" primary="white" secondary="grey" margin m>x</gen-btn-flat>
          </template>
          <template v-slot:main>
            <slot name="main" :trigger="close"></slot>
          </template>
          <template v-slot:action>
            <slot name="action" :trigger="close"></slot>
          </template>
        </card>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from "../Card/Card.vue";
import GenBtnFlat from "../GenBtnFlat/GenBtnFlat.vue";
import '../animation.css'
import Spacing from "../Spacing/Spacing.vue";

export default {
  name: "Window",
  components: {Spacing, GenBtnFlat, Card},
  props: {
    title: { type: String, default: '' },
    strict: { type: Boolean, default: '' }
  },
  data() {
    return {
      state: false
    }
  },
  methods: {
    open() {
      this.state = true
    },
    close() {
      this.state = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .window {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .window-mask {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;

      background: rgba(0, 0, 0, 0.3);

    }
  }
</style>
