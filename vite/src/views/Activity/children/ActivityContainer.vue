<template>
  <vet-list flex>
    <div class="layout">
      <card v-for="activity in activities" primary="none" :secondary="app.theme.secondary" flat>
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
          <card primary="none" :secondary="app.theme.border"
                :style="{borderLeft: 'solid .5rem'}" flat>
            <template v-slot:head>
              <div class="line">
                <span class="title">{{activity.content.title}}</span>
              </div>
            </template>
            <template v-slot:main>
              <div class="line">
                <gen-btn-flat v-for="tag in activity.content.tags" :key="tag"
                              :primary="app.theme.card" :secondary="app.theme.border" margin>
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
  </vet-list>
</template>

<script>
import VetList from "@/components/Generic/VetList/VetList.vue";
import Card from "@/components/Generic/Card/Card.vue";
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
import Avatar from "@/components/Generic/Avatar/Avatar.vue";
import Spacing from "@/components/Generic/Spacing/Spacing.vue";
import FeedBack from "@/components/Generic/FeedBack/FeedBack.vue";
export default {
  name: "ActivityContainer",
  components: {FeedBack, Spacing, Avatar, GenBtnFlat, Card, VetList},
  props: {
    app: {type: Object}
  },
  data() {
    return {
      activities: [
        {id: 0, authorName: 'user1', type: 'note', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'},
        {id: 1, authorName: 'user1', type: 'note', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'},
        {id: 2, authorName: 'user1', type: 'comment', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'},
        {id: 3, authorName: 'user1', type: 'comment', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'},
        {id: 4, authorName: 'user1', type: 'reply', content: {title: 'title', tags: ['test'], desc: 'content'}, time: '2021-4-20 18:20'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    background: white;

    .user {
      padding: 1em;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;
      align-items: center;
    }

    .line {
      padding: .1rem .2rem;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;
      align-items: center;
    }

    .title {
      margin: .1rem;
      font-size: 1.1rem;
    }

    .activity-icon {
      margin: .3rem;
    }
  }
</style>
