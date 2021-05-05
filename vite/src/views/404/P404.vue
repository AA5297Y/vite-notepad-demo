<template>
  <div class="p404-container">
    <p class="title">404</p>
    <h4>{{$t('message.router.P404.notFound')}}</h4>
  </div>
</template>

<script>
export default {
  name: "P404"
}
</script>

<style lang="scss" scoped>
  .p404-container {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    color: white;

    .title {
      margin: 1rem;
      font-size: 5rem;
      font-style: italic;
      color: grey;
    }
    .title:before {
      position: fixed;
      margin-top: -.12rem;
      margin-left: -.1rem;

      content: '404';
      font-size: 5rem;
      font-style: italic;
      color: white;
    }
  }
</style>
