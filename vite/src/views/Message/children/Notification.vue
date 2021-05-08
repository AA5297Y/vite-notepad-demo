<template>
  <pagination :page="page" :ref-height="115.89"
              :primary="app.theme.primary" :secondary="app.theme.strong">
    <template v-slot="prop">
      <card :primary="app.theme.primary" :secondary="app.theme.secondary" flat>
        <template v-slot:head>
          <div class="line">
            <div class="title">
              <gen-btn-flat v-if="prop.item.unRead"
                            :primary="app.theme.card" :secondary="app.theme.secondary" margin>
                {{$t('message.router.message.unRead')}}
              </gen-btn-flat>
              {{prop.item.title}}
            </div>
          </div>
        </template>
        <template v-slot:main>
          <div class="line">
            <div class="desc">
              {{prop.item.desc}}
            </div>
          </div>
        </template>
        <template v-slot:action>
          <div class="line">
            <div class="desc">
              <span class="message-icon iconfont icon-calendar"></span>
              {{prop.item.time}}
            </div>
            <btn-group>
              <gen-btn-flat :primary="app.theme.card" secondary="indianred" margin m>{{$t('message.button.delete')}}</gen-btn-flat>
            </btn-group>
          </div>
        </template>
      </card>
    </template>
  </pagination>
</template>

<script>
export default {
  name: "Notification",
  props: {
    app: { type: Object }
  },
  data() {
    return {
      page: [
        {
          id: 0,
          title: 'title1',
          collection: true,
          working: true,
          tags: ['html', 'css', 'js'],
          desc: 'test1',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 1,
          title: 'title2',
          collection: true,
          working: true,
          tags: ['vue', 'vue-router'],
          desc: 'test2',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 2,
          title: 'title3',
          collection: false,
          working: true,
          tags: ['vite'],
          desc: 'test3',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 3,
          title: 'title4',
          collection: false,
          working: true,
          tags: ['vite'],
          desc: 'test4',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 4,
          title: 'title5',
          collection: false,
          working: true,
          tags: ['resize-observer-polyfill'],
          desc: 'test5',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 5,
          title: 'title6',
          collection: false,
          working: false,
          tags: ['resize-observer-polyfill'],
          desc: 'test6',
          unRead: true,
          time: '2021-2-22 22:22'
        },
        {
          id: 6,
          title: 'title7',
          collection: false,
          working: false,
          tags: ['resize-observer-polyfill'],
          desc: 'test6',
          unRead: true,
          time: '2021-2-22 22:22'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  padding: .1rem;
  display: flex;
  position: relative;
  flex: 1 1 auto;

  .title {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;

    font-size: 1.1rem;
  }

  .desc {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;

    padding: .1rem .3rem;
    font-size: .9rem;
    color: grey;
  }

  .message-icon {
    margin-right: .3rem;
  }
}
</style>
