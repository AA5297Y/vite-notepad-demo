<template>
  <div class="welcome-container">
    <card primary="none" secondary="lightgrey" flat no-shadow stretch>
      <template v-slot:main>
        <div class="welcome" v-if="app.author.uid === app.user.uid && app.login">
          <div class="line">
            <h2>
              {{ $t('message.router.home.welcomeBack') }}
              <span :style="{color: app.theme.strong}">"{{app.author.username}}"</span>
            </h2>
          </div>
          <div class="line">
            <a>{{app.author.email === '' ? '--------' : app.author.email}}</a>
          </div>
          <div class="line">
            {{$t('message.router.home.working')}}
            <btn-group wrap>
              <gen-btn-flat v-for="item in working" :key="item.id"
                            :primary="app.theme.secondary" :secondary="app.theme.primary"
                            transparent border margin no-padding>
                <span class="recent-time" :style="{color: app.theme.text}">{{
                    compRecentTime(item.time).value + $t(compRecentTime(item.time).key) + $t("message.dateTime.ago")
                }}</span>
                {{item.title}}
              </gen-btn-flat>
            </btn-group>
          </div>
        </div>
        <div class="welcome" v-else>
          <h2>
            {{$t('message.router.home.welcomeL')}}
            <span :style="{color: 'skyblue'}">"{{app.author.username}}"</span>
            {{$t('message.router.home.welcomeR')}}
          </h2>
          <a>{{app.author.email}}</a>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import GenBtn from "@/components/Generic/GenBtn/GenBtn.vue"
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
import Card from "@/components/Generic/Card/Card.vue";
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue";
import Spacing from "@/components/Generic/Spacing/Spacing.vue";
export default {
  name: "Welcome",
  components: {BtnGroup, GenBtnFlat, Card, GenBtn, Spacing},
  emits: ['toMe'],
  props: {
    app: { type: Object }
  },
  data() {
    return {
      working: [
        { id: 0, title: 'title1', tags: ['html','css','js'], desc: 'test1', time: '2021-2-22 22:22' },
        { id: 1, title: 'title2', tags: ['vue','vue-router'], desc: 'test2', time: '2021-2-22 22:22'},
        { id: 2, title: 'title3', tags: ['vite'], desc: 'test3', time: '2021-2-22 22:22'},
      ]
    }
  },
  methods: {
    me() {
      this.$router.push({name: 'User/Me'})
    },
    compRecentTime(timeStr) {
      let now = new Date()
      let date = new Date(timeStr)

      let time = new Date(now - date)

      let year = time.getUTCFullYear() - 1970
      if (year > 0) { return {key: 'message.dateTime.year', value: year} }

      let month = time.getUTCMonth()
      if (month > 0) { return {key: 'message.dateTime.month', value: month} }

      let _date = time.getUTCDate()
      if (_date > 0) { return {key: 'message.dateTime.date', value: _date} }

      let hours = time.getUTCHours()
      if (hours > 0) { return {key: 'message.dateTime.hour', value: hours} }

      let minutes = time.getUTCMinutes()
      if (minutes > 0) { return {key: 'message.dateTime.minute', value: minutes} }
    }
  }
}
</script>

<style lang="scss" scoped>
  .welcome-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    min-height: 20rem;
  }
  .welcome {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .line {
    padding: 0.3rem;
  }
  .recent-time {
    background: white;
    padding: 0.2rem;
  }
</style>
