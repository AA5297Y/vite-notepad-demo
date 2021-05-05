<template>
  <btn-group>
    <gen-btn-flat :primary="primary" :secondary="secondary" margin disable>
      <span class="feedback-icon iconfont icon-browse"></span>
      {{visited}}
    </gen-btn-flat>
    <gen-btn-flat :primary="primary" :secondary="secondary" margin disable>
      <span v-if="iLike" class="feedback-icon iconfont icon-smile-filling"></span>
      <span v-if="!iLike" class="feedback-icon iconfont icon-smile"></span>
      {{like}}
    </gen-btn-flat>
    <gen-btn-flat :primary="primary" :secondary="secondary" margin disable>
      <span v-if="iDisLike" class="feedback-icon iconfont icon-cry-filling"></span>
      <span v-if="!iDisLike" class="feedback-icon iconfont icon-cry"></span>
      {{disLike}}
    </gen-btn-flat>
    <gen-btn-flat :primary="primary" :secondary="secondary" margin disable>
      <span v-if="iFavorite" class="feedback-icon iconfont icon-favorite-filling"></span>
      <span v-if="!iFavorite" class="feedback-icon iconfont icon-favorite"></span>
      {{favorite}}
    </gen-btn-flat>
    <gen-btn-flat :primary="primary" :secondary="secondary" margin disable>
      <span class="feedback-icon iconfont icon-comment"></span>
      {{comment}}
    </gen-btn-flat>
  </btn-group>
</template>

<script>
import BtnGroup from "../BtnGroup/BtnGroup.vue";
import GenBtnFlat from "../GenBtnFlat/GenBtnFlat.vue";
export default {
  name: "FeedBack",
  components: {GenBtnFlat, BtnGroup},
  props: {
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    visited: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    disLike: { type: Number, default: 0 },
    favorite: { type: Number, default: 0 },
    comment: { type: Number, default: 0 },
    iLike: { type: Boolean, default: false },
    iDisLike: { type: Boolean, default: false },
    iFavorite: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .feedback-icon {
    margin-right: 2px;
  }
</style>
