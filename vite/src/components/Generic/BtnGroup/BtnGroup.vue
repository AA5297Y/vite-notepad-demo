<template>
  <div class="btn-container transitional" :style="{
    flex: stretch ? '1 1 auto' : '0 1 auto',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: vetAlignCenter ? 'center' : 'stretch'
  }">
    <slot></slot>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'

export default {
  name: "BtnGroup",
  props: {
    stretch: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false },
    vetAlignCenter: { type: Boolean, default: false }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-container {
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    align-items: stretch;
  }
</style>
