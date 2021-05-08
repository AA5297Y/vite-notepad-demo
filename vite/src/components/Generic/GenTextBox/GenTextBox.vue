<template>
  <div class="gen-text-box">
    <input @input="input($event.target.value)"
           :class="'input-box transitional ' + (m ? 'm' : (l ? 'l' : (xl ? 'xl' : 'm'))) + (border ? '' : ' no-border') + (margin ? '' : ' no-margin') + ((hover || focus) ? ' active' : '' + (flat ? ' flat' : ''))"
           :style="{
             maxWidth: !auto ? width : 'auto',
             minWidth: !auto ? width : 'auto',
             background: flat ? 'none' : primary,
             color: primary,
             borderColor: (!valid) ? 'indianred' : ((hover || focus) ? secondary : primary)
           }"
           :type="text ? 'text' : (password ? 'password' : (number ? 'number' : 'text'))" :value="value"
           @mouseover="hover = true" @mouseout="hover = false"
           @focus="focus = true" @blur="focus = false"
           :autocomplete="autoComplete ? 'on' : (password ? 'new-password' : 'off')">
    <div v-if="!valid" class="error-label">
      {{validation.errorMessage}}
    </div>
  </div>
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
    text: { type: Boolean, default: false },
    password: { type: Boolean, default: false },
    autoComplete: { type: Boolean, default: false },
    number: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    placeHolder: { type: String, default: '' },
    value: { type: String, default: '' },
    validation: { type: Object, default: { regExp: /.*/, errorMessage: '' } },
    flat: { type: Boolean, default: false },
    m: { type: Boolean, default: false },
    l: { type: Boolean, default: false },
    xl: { type: Boolean, default: false }
  },
  emits: ['update:value', 'update:valid'],
  data() {
    return {
      hover: false,
      focus: false,
      valid: true
    }
  },
  methods: {
    input(value) {
      this.$emit('update:value', value)
      if (this.validation.regExp !== /.*/) {
        this.valid = this.validation.regExp.test(value)
        this.$emit('update:valid', this.valid)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .gen-text-box {
    position: relative;
    flex-flow: column nowrap;
  }

  .error-label {
    position: relative;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: center;
    text-align: center;
    white-space: normal;

    font-size: .6rem;
    color: indianred;
  }

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
