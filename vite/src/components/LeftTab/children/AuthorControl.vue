<template>
  <div class="author-control" :style="{color: app.theme.primary}">
    <avatar @click="(app.login && app.author.uid === app.user.uid) ? me() : ''" :width="100" :height="100" primary="white"
            secondary="dimgrey" shadow-on-hover>
    </avatar>
    <div class="line">
      <h3>
        {{app.author.username}}
      </h3>
    </div>
    <div class="line">
      uid:&nbsp {{app.author.uid}}
    </div>
    <div class="line">
      <div class="text">
        <p>
          <span class="iconfont icon-task"></span>
          {{app.author.keyword}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorControl",
  props: {
    app: Object
  },
  methods: {
    me() {
      this.$router.push({name: 'User/Me'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .author-control {
    padding: 3rem 0;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .line {
      display: flex;
      position: relative;
      padding: 0.2em 0.5em;
      align-items: center;

      .text {
        flex-flow: row wrap;
        white-space: normal;
      }
    }
  }
</style>
