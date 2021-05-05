<template>
  <div class="user-control" :style="{color: app.theme.primary}">
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
          {{app.authorDetial.keyword}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue";
import GenBtn from "@/components/Generic/GenBtn/GenBtn.vue";
import Avatar from "@/components/Generic/Avatar/Avatar.vue";
import Window from "@/components/Generic/Window/Window.vue";
import Card from "@/components/Generic/Card/Card.vue";
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
import Spacing from "@/components/Generic/Spacing/Spacing.vue";

export default {
  name: "UserControl",
  components: {Spacing, GenBtnFlat, Card, Window, Avatar, GenBtn, BtnGroup},
  emits: ['toMe'],
  props: {
    app: Object
  },
  data() {
    return {

    }
  },
  methods: {
    me() {
      this.$router.push({name: 'User/Me'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-control {
    min-height: 20rem;
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
