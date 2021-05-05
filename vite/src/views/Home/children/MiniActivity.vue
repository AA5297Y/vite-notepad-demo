<template>
  <card :primary="app.theme.primary" :secondary="app.theme.secondary" flat>
    <template v-slot:head>
      <div class="line">
        <div class="title">
          {{$t('message.router.home.recent')}}
          <span :style="{color: app.theme.strong}">
            {{$t('message.router.activity.name')}}
          </span>
        </div>
        <spacing></spacing>
        <gen-btn-flat @click="activity" :primary="app.theme.primary" :secondary="app.theme.strong" transparent circle l>
          <span class="iconfont icon-elipsis"></span>
        </gen-btn-flat>
      </div>
    </template>
    <template v-slot:main>
      <btn-group stretch wrap>
        <div class="activity-container" v-for="activity in activities" :key="activity.id">
          <card :primary="app.theme.primary" :secondary="app.theme.secondary" flat stretch>
            <template v-slot:head>
              <div class="user">
                <avatar :width="40" :height="40" :primary="app.theme.secondary" :secondary="app.theme.secondary"></avatar>
                <span class="title">{{activity.authorName}}</span>
                <gen-btn-flat :primary="app.theme.card" :secondary="app.theme.secondary" margin>
                  {{$t('message.router.activity.type.' + activity.type)}}
                </gen-btn-flat>
              </div>
            </template>
            <template v-slot:main>
              <card :primary="app.theme.primary" :secondary="app.theme.border"
                    :style="{borderLeft: 'solid .5rem'}" flat>
                <template v-slot:head>
                  <div class="line">
                    <span class="title">{{activity.content.title}}</span>
                  </div>
                </template>
                <template v-slot:main>
                  <div class="line">
                    <gen-btn-flat v-for="tag in activity.content.tags" :key="tag" :primary="app.theme.primary" :secondary="app.theme.border" margin>
                      {{tag}}
                    </gen-btn-flat>
                  </div>
                  <div class="line">
                    {{activity.content.desc}}
                  </div>
                </template>
              </card>
            </template>
            <template v-slot:action>
              <div class="line">
                <span class="activity-icon iconfont icon-calendar"></span>
                <span>{{activity.time}}</span>
                <spacing></spacing>
                <feed-back :primary="app.theme.primary" :secondary="app.theme.border"></feed-back>
              </div>
            </template>
          </card>
        </div>
      </btn-group>
    </template>
  </card>
</template>

<script>
import Avatar from "@/components/Generic/Avatar/Avatar.vue"
import Card from "@/components/Generic/Card/Card.vue"
import Spacing from "@/components/Generic/Spacing/Spacing.vue"
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue"
import HorList from "@/components/Generic/HorList/HorList.vue"
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue"
import FeedBack from "@/components/Generic/FeedBack/FeedBack.vue"
export default {
  name: "MiniActivity",
  components: {BtnGroup, HorList, GenBtnFlat, Spacing, Card, Avatar, FeedBack},
  emits: ['toActivity'],
  props: {
    app: { type: Object }
  },
  data() {
    return {
      activities: [
        {id: 0, authorName: 'user1', type: 'note', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'},
        {id: 1, authorName: 'user1', type: 'note', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'}
      ]
    }
  },
  methods: {
    activity() {
      this.$router.push({name: 'User/Activities'})
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 10px;
}
.text {
  color: grey;
}

.activity-container {
  position: relative;
  display: flex;
  flex: 1 1 auto;
}

.user {
  padding: .3rem;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
}

.line {
  padding: .1rem;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
}

.title {
  margin: .3rem;
  font-size: 1.1rem;
}

.activity-icon {
  margin: .3rem;
}
</style>
