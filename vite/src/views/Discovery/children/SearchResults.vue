<template>
  <pagination :primary="app.theme.primary"
              :secondary="app.theme.strong"
              :page="page" :refHeight="113.29">
    <template v-slot="prop">
      <card :primary="app.theme.primary"
            :secondary="app.theme.secondary" flat>
        <template v-slot:head>
          <div class="line">
            <btn-group vetAlignCenter>
              {{prop.item.title}}
              <gen-btn-flat :primary="app.theme.card"
                            :secondary="app.theme.secondary"
                            margin>
                {{$t('message.router.discovery.type.' + prop.item.type)}}
              </gen-btn-flat>
            </btn-group>
          </div>
        </template>
        <template v-slot:main>
          <div class="line">
            {{prop.item.desc}}
          </div>
        </template>
        <template v-slot:action>
          <div class="line">
            <span class="dsec-icon iconfont icon-calendar"></span>
            {{prop.item.time}}
          </div>
        </template>
      </card>
    </template>
  </pagination>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    app: {type: Object}
  },
  data() {
    return {
      page: [
        {
          id: 0,
          type: 'user',
          title: 'title',
          desc: 'desc',
          time: '2021-2-22'
        },
        {
          id: 1,
          type: 'user',
          title: 'title',
          desc: 'desc',
          time: '2021-2-22'
        },
        {
          id: 1,
          type: 'note',
          title: 'title',
          desc: 'desc',
          time: '2021-2-22'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .line {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: .2rem .3rem;
  }
  .dsec-icon {
    margin-right: .3rem;
  }
</style>
