<template>
  <input @input="$emit('update:value', $event.target.value)"
    :class="'input-box transitional ' + (m ? 'm' : (l ? 'l' : (xl ? 'xl' : 'm'))) + (border ? '' : ' no-border') + (margin ? '' : ' no-margin') + ((hover || focus) ? ' active' : '' + (flat ? ' flat' : ''))"
    :style="{
      maxWidth: !auto ? width : 'auto',
      minWidth: !auto ? width : 'auto',
      background: flat ? 'none' : primary,
      color: primary,
      borderColor: (hover || focus) ? secondary : primary
    }"
    :type="text ? 'text' : (password ? 'password' : (number ? 'number' : 'text'))" :value="value"
    @mouseover="hover = true" @mouseout="hover = false"
    @focus="focus = true" @blur="focus = false">
</template>

<script>
export default {
  name: "GenTextBox",
  props: {
    auto: { type: Boolean, default: false },
    width: { type: String, default: '10rem' },
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    third: { type: String, default: 'lightgrey' },
    margin: { type: Boolean, default: false },
    text: Boolean,
    password: Boolean,
    number: Boolean,
    border: { type: Boolean, default: false },
    placeHolder: { type: String, default: '' },
    value: { type: String, default: '' },
    flat: { type: Boolean, default: false },
    m: { type: Boolean, default: false },
    l: { type: Boolean, default: false },
    xl: { type: Boolean, default: false }
  },
  emits: ['update:value'],
  data() {
    return {
      hover: false,
      focus: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-box {
    border: solid 1px;
    backface-visibility: hidden;
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: stretch;
    align-items: center;
    text-align: left;
  }
  .m {
    margin: .3rem;
    height: 1.5rem;
    font-size: 1rem;
    padding: .4rem;
  }
  .l {
    margin: .4rem;
    height: 1.6rem;
    font-size: 1.1rem;
    padding: .5rem;
  }
  .xl {
    margin: .5rem;
    height: 1.7rem;
    font-size: 1.3rem;
    padding: .6rem;
  }
  .no-margin {
    margin: 0;
  }
  .no-border {
    border: none;
  }
  .flat {
    border: none;
    border-bottom: solid 1px;
  }
  .active {
    outline: none;
    border-bottom: solid 1px;
  }
</style>
