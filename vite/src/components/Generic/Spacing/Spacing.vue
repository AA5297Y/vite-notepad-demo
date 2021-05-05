<template>
  <div class="spacing">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Spacing"
}
</script>

<style scoped>
  .spacing {
    height: auto;
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
  }
</style>
