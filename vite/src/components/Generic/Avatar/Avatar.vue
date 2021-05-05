<template>
  <div class="avatar-container transitional" :style="{
    width: width + 'px',
    height: height + 'px',
    color: primary,
    boxShadow: shadowOnHover ? ((hover) ? '0 0 20px ' + secondary : '0 0 0 ' + secondary) : '0 0 0'
  }"
  @mouseover="hover = true" @mouseout="hover = false">
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    width: Number,
    height: Number,
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    shadowOnHover: Boolean
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar-container {
    position: relative;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    border: solid 1px;
    box-shadow: 0 0 0 white;
    border-radius: 50%;
    padding: 0;
    overflow: hidden;

    backface-visibility: hidden;
  }
</style>
