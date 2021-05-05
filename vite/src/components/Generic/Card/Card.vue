<template>
  <div class="card transitional" :style="{
      boxShadow: (!noShadow) ? ((hover) ? '0 0 10px dimgrey' : 'none') : '',
      border: (border) ? 'solid 1px' : '',
      borderTop: (!noShadow) ? 'solid 1px' : '',
      borderColor: (!flat) ? 'lightgrey' : secondary,
      background: (!flat) ? (hover ? secondary : primary) : primary,
      color: (!flat) ? (hover ? primary : secondary) : secondary,
      flex: stretch ? '1 1 auto' : '',
    }"
    @mouseover="hover = true" @mouseout="hover = false">
    <div class="head_">
      <slot name="head"></slot>
    </div>
    <slot></slot>
    <div class="main_">
      <slot name="main"></slot>
    </div>
    <div class="acts_">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    border: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    stretch: { type: Boolean, default: false }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    position: relative;
    flex-flow: column nowrap;

    margin: .6rem;
    overflow: hidden;

    .head_ {
      display: flex;
      position: relative;
      flex-flow: row nowrap;

      font-size: 1rem;
    }

    .main_ {
      display: flex;
      position: relative;
      flex: 1 1 auto;
      flex-flow: column nowrap;

      font-size: 1rem;
    }

    .acts_ {
      display: flex;
      position: relative;
      flex-flow: column nowrap;

      font-size: 1rem;
    }
  }
</style>
