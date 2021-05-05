<template>
  <pagination :primary="app.theme.primary"
              :secondary="app.theme.strong"
              :page="page" :refHeight="224.58">
    <template v-slot="prop">
      <card :primary="app.theme.primary" :secondary="app.theme.secondary" flat>
        <template v-slot:head>
          <div class="line">
            <div class="title">
              {{prop.item.title}}
            </div>
          </div>
        </template>
        <template v-slot:main>
          <div class="line">
            <btn-group>
              <gen-btn-flat v-for="tag in prop.item.tags" :key="tag"
                            :primary="app.theme.card" :secondary="app.theme.secondary"
                            margin m>
                {{tag}}
              </gen-btn-flat>
            </btn-group>
          </div>
          <div class="line">
            <div class="desc">
              {{prop.item.desc}}
            </div>
          </div>
          <div class="line">
            <card primary="none" :secondary="app.theme.border"
                  :style="{borderLeft: 'solid .5rem'}" flat stretch>
              <template v-slot:head>
                <div class="line">
                  <gen-btn-flat :primary="app.theme.card" :secondary="app.theme.border">
                    {{$t('message.router.code.updateType.' + prop.item.lastUpdate.type)}}
                  </gen-btn-flat>
                  <span class="title">
                    <span class="code-icon iconfont icon-calendar"></span>
                    {{prop.item.lastUpdate.time}}
                  </span>
                </div>
              </template>
              <template v-slot:main>
                <div class="line">{{prop.item.lastUpdate.desc}}</div>
              </template>
            </card>
          </div>
        </template>
        <template v-slot:action>
          <div class="line">
            <div class="desc">
              <span class="code-icon iconfont icon-calendar"></span>
              {{prop.item.time}}
            </div>
            <feed-back :primary="app.theme.primary" :secondary="app.theme.border" disabled></feed-back>
            <btn-group>
              <gen-btn-flat :primary="app.theme.card" :secondary="app.theme.strong" margin m>
                {{$t('message.router.code.update')}}
              </gen-btn-flat>
              <gen-btn-flat :primary="app.theme.card" secondary="indianred" margin m>
                {{$t('message.button.delete')}}
              </gen-btn-flat>
            </btn-group>
          </div>
        </template>
      </card>
    </template>
  </pagination>
</template>

<script>
import GenBtnFlat from "../../../components/Generic/GenBtnFlat/GenBtnFlat.vue";
import BtnGroup from "../../../components/Generic/BtnGroup/BtnGroup.vue";
import Pagination from "@/components/Generic/Pagination/Pagination.vue";
import FeedBack from "../../../components/Generic/FeedBack/FeedBack.vue";
import Card from "../../../components/Generic/Card/Card.vue";

export default {
  name: "CodeContainer",
  components: { GenBtnFlat, BtnGroup, FeedBack, Pagination, Card },
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
          lastUpdate: {
            type: 'bugFix',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        },
        {
          id: 1,
          title: 'title2',
          collection: true,
          working: true,
          tags: ['vue', 'vue-router'],
          desc: 'test2',
          lastUpdate: {
            type: 'bugFix',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        },
        {
          id: 2,
          title: 'title3',
          collection: false,
          working: true,
          tags: ['vite'],
          desc: 'test3',
          lastUpdate: {
            type: 'newFeature',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        },
        {
          id: 3,
          title: 'title4',
          collection: false,
          working: true,
          tags: ['vite'],
          desc: 'test4',
          lastUpdate: {
            type: 'normalUpdate',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        },
        {
          id: 4,
          title: 'title5',
          collection: false,
          working: true,
          tags: ['resize-observer-polyfill'],
          desc: 'test5',
          lastUpdate: {
            type: 'normalUpdate',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        },
        {
          id: 5,
          title: 'title6',
          collection: false,
          working: false,
          tags: ['resize-observer-polyfill'],
          desc: 'test6',
          lastUpdate: {
            type: 'newFeature',
            time: '2021-2-22 22:23',
            desc: 'update desc1'
          },
          time: '2021-2-22 22:22'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .line {
    padding: .1rem .3rem;
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 auto;
  }

  .title {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;

    padding: .2rem;
    font-size: 1.1rem;
  }

  .desc {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;

    padding: .1rem .8rem;
    font-size: .9rem;
    color: grey;
  }

  .code-icon {
    margin-right: .3rem;
  }
</style>
