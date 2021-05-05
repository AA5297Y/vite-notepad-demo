<template>
  <div class="gen-list-item transitional" :style="{
    color: (hover || focus) ? primary : secondary,
    background: (hover || focus) ? secondary : 'none',
    justifyContent: center ? 'center' : 'flex-start'
  }"
  @mouseover="hover = true" @mouseout="hover = false"
  @focus="focus = true" @blur="focus = false">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GenListItem",
  props: {
    primary: { type: String, default: 'black' },
    secondary: { type: String, default: 'white' },
    center: Boolean
  },
  data() {
    return {
      hover: false,
      focus: false
    }
  }
}
</script>

<style scoped>
  .gen-list-item {
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    padding: 0.4rem;
  }
</style>
