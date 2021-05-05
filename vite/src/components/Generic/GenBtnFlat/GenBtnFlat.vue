<template>
  <button
    :class="'gen-btn-flat transitional ' + (m ? 'm' : (l ? 'l' : (xl ? 'xl' : 'm'))) + ' '
    + (m ? 'm' : (l ? 'l' : (xl ? 'xl' : 'm')))
    + (rounded ? '-rounded' : '') + (circle ? '-circle' : '') + (square ? '-square' : '')
    + (!border ? ' no-border' : '') + (!margin ? ' no-margin' : '') + (noPadding ? ' no-padding' : '')"
    :style="{
      borderColor: secondary,
      background: ((value || hover) && !disable) ? secondary: (transparent ? 'none' : primary),
      color: ((value || hover) && !disable) ? primary : secondary
    }"
    @mouseover="hover = true" @mouseout="hover = false" @click="switches ? changeValue() : ''">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GenBtnFlat",
  props: {
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    value: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    margin: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
    switches: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    m: { type: Boolean, default: false },
    l: { type: Boolean, default: false },
    xl: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false}
  },
  emits: [ 'update:value' ],
  data() {
    return {
      hover: false
    }
  },
  methods: {
    changeValue() {
      this.$emit('update:value', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .gen-btn-flat {
    position: relative;
    display: flex;

    background: none;
    border: solid 1px;
    outline: none;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    white-space: nowrap;
  }
  .m {
    margin: .3rem;
    line-height: 1rem;
    font-size: 1rem;
    padding: .2rem .3rem;
  }
  .l {
    margin: .4rem;
    line-height: 1.1rem;
    font-size: 1.1rem;
    padding: .3rem .4rem;
  }
  .xl {
    margin: .5rem;
    line-height: 1.2rem;
    font-size: 1.2rem;
    padding: .4rem .5rem;
  }
  .m-rounded {
    border-radius: 1.05rem;
  }
  .l-rounded {
    border-radius: 1.2rem;
  }
  .xl-rounded {
    border-radius: 1.35rem;
  }
  .m-circle {
    padding: .2rem;
    border-radius: 50%;
  }
  .l-circle {
    padding: .3rem;
    border-radius: 50%;
  }
  .xl-circle {
    padding: .4rem;
    border-radius: 50%;
  }
  .m-square {
    padding: .2rem;
    min-width: 1rem;
  }
  .l-square {
    padding: .3rem;
    min-width: 1.1rem;
  }
  .xl-square {
    padding: .4rem;
    min-width: 1.3rem;
  }
  .no-border {
    border: none;
  }
  .no-margin {
    margin: 0;
  }
  .no-padding {
    padding: 0;
  }
</style>
