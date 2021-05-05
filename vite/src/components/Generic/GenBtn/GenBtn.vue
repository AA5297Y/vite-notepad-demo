<template>
  <button
    :class="'gen-btn transitional ' + (m ? 'm' : (l ? 'l' : (xl ? 'xl' : 'm')))
    + (!margin ? ' no-margin' : '') + (!border ? ' no-border' : '') + (hover ? ' active' : '')"
    :style="{
      background: (active) ? primary : (transparent ? 'none' : secondary),
      color: (active || hover) ? secondary : primary
    }"
    @mouseover="hover = true" @mouseout="hover = false">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'GenBtn',
  props: {
    active: { type: Boolean, default: false },
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    margin: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    m: { type: Boolean, default: false },
    l: { type: Boolean, default: false },
    xl: { type: Boolean, default: false }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .gen-btn {
    position: relative;
    margin: 0;

    background: none;
    border: solid 1px;
    outline: none;
    color: white;
    overflow: hidden;

    white-space: nowrap;

    span {
      display: block;
      position: relative;
    }
  }
  .gen-btn::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: -100%;
    bottom: -100%;

    margin: 0;
    padding: 0;
    border: none;
    background: white;
    transform: rotate(45deg);
    transition: all .8s;

    backface-visibility: hidden;
  }
  .m {
    margin: .3rem;
    line-height: 1rem;
    font-size: 1rem;
    padding: .4rem;
  }
  .l {
    margin: .4rem;
    line-height: 1rem;
    font-size: 1.1rem;
    padding: .5rem;
  }
  .xl {
    margin: .5rem;
    line-height: 1rem;
    font-size: 1.2rem;
    padding: .6rem;
  }
  .no-margin {
    margin: 0;
  }
  .no-border {
    border: none;
  }
  .active::before {
    transform: scale(10) translateX(10%) translateY(-10%) rotate(45deg);
  }
</style>
