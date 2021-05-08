<template>
  <card :primary="app.theme.primary"  :secondary="app.theme.secondary" flat>
    <template v-slot:head>
      <div class="line">
        <div class="title">
          {{$t('message.router.home.recent')}}
          <span :style="{color: app.theme.strong}">
            {{$t('message.router.note.name')}}
          </span>
        </div>
        <spacing></spacing>
        <gen-btn-flat @click="note" :primary="app.theme.primary" :secondary="app.theme.strong" transparent circle l>
          <span class="iconfont icon-elipsis"></span>
        </gen-btn-flat>
      </div>
    </template>
    <template v-slot:main>
      <hor-list :primary="app.theme.primary" :secondary="app.theme.strong" margin circle flex>
        <card v-for="item in recentNote" :key="item.id" :primary="app.theme.primary" :secondary="app.theme.secondary" flat>
          <template v-slot:head>
            <div class="recent-title">{{item.title}}</div>
          </template>
          <template v-slot:main>
            <div class="recent-main">
              <gen-btn-flat v-for="tag in item.tags" :key="tag" :primary="app.theme.card" :secondary="app.theme.secondary" margin>{{tag}}</gen-btn-flat>
            </div>
          </template>
          <template v-slot:action>
            <div class="recent-acts">
              <span class="text">{{item.time}}</span>
              <spacing></spacing>
              <gen-btn-flat :primary="app.theme.card" :secondary="app.theme.strong" m>{{$t('message.button.open')}}</gen-btn-flat>
            </div>
          </template>
        </card>
      </hor-list>
    </template>
  </card>
</template>

<script>
export default {
  name: "MiniNote",
  emits: ['toNote'],
  props: {
    app: { type: Object }
  },
  data() {
    return {
      recentNote: [
        { id: 0, title: 'title1', tags: ['html','css','js'], desc: 'test1', time: '2021-2-22 22:22' },
        { id: 1, title: 'title2', tags: ['vue','vue-router'], desc: 'test2', time: '2021-2-22 22:22'},
        { id: 2, title: 'title3', tags: ['vite'], desc: 'test3', time: '2021-2-22 22:22'},
        { id: 3, title: 'title4', tags: ['vue','html','resize-observer-polyfill'], desc: 'test4', time: '2021-2-22 22:22'},
      ]
    }
  },
  methods: {
    note() {
      this.$router.push({name: 'Author/Notes'})
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: grey;
}
.line {
  padding: .3rem;
  display: flex;
  position: relative;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.title {
  margin: .3rem;
  font-size: 1rem;
}
.hor-list-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}
.recent-title {
  padding: .3rem;
}
.recent-main {
  padding: .3rem;
  display: flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 15rem;
  max-width: 15rem;
  flex: 1 1 auto;
  color: grey
}
.recent-acts {
  padding: .3rem;
  display: flex;
  position: relative;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: center;
}
</style>
