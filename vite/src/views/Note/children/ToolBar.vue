<template>
  <card primary="none" :secondary="app.theme.secondary" flat no-shadow>
    <template v-slot:main>
      <div class="line">
        <btn-group>
          <hor-list :primary="app.theme.primary" :secondary="app.theme.strong">
            <gen-btn-flat @click="changeFilter('onTop')" :value="filter.indexOf('onTop') > -1" primary="rgba(128,128,128,0.5)" :secondary="app.theme.primary" l>
              <span class="note-toolbar-icon iconfont icon-top"></span>
              {{$t('message.router.note.onTop')}}
            </gen-btn-flat>
            <transition name="show-hide">
              <btn-group v-if="app.login">
                <gen-btn-flat @click="changeFilter('private')" :value="filter.indexOf('private') > -1" primary="rgba(128,128,128,0.5)" :secondary="app.theme.primary" l>
                  <span class="note-toolbar-icon iconfont icon-lock"></span>
                  <span>{{$t('message.router.note.private')}}</span>
                </gen-btn-flat>
                <gen-btn-flat @click="changeFilter('public')" :value="filter.indexOf('public') > -1" primary="rgba(128,128,128,0.5)" :secondary="app.theme.primary" l>
                  <span class="note-toolbar-icon iconfont icon-share"></span>
                  <span>{{$t('message.router.note.public')}}</span>
                </gen-btn-flat>
                <gen-btn-flat @click="changeFilter('collection')" :value="filter.indexOf('collection') > -1" primary="rgba(128,128,128,0.5)" :secondary="app.theme.primary" l>
                  <span class="note-toolbar-icon iconfont icon-fabulous"></span>
                  <span>{{$t('message.router.note.collection')}}</span>
                </gen-btn-flat>
                <gen-btn-flat @click="changeFilter('working')" :value="filter.indexOf('working') > -1" primary="rgba(128,128,128,0.5)" :secondary="app.theme.primary" l>
                  <span class="note-toolbar-icon iconfont icon-history"></span>
                  <span>{{$t('message.router.note.working')}}</span>
                </gen-btn-flat>
              </btn-group>
            </transition>
          </hor-list>
          <div class="search-container">
            <gen-text-box v-model:value="search" @value="$emit('update:search', $event)" width="10rem"
                          :primary="app.theme.primary" :secondary="app.theme.strong" flat l></gen-text-box>
            <gen-btn-flat :primary="app.theme.secondary" :secondary="app.theme.primary" transparent square l>
              <span class="iconfont icon-search"></span>
            </gen-btn-flat>
          </div>
          <transition name="show-hide">
            <gen-btn-flat v-if="app.login" @click="newNote" :primary="app.theme.secondary" :secondary="app.theme.primary" transparent l>
              <span class="note-toolbar-icon iconfont icon-add"></span>
              <span>{{$t('message.button.new')}}</span>
            </gen-btn-flat>
          </transition>
        </btn-group>
      </div>
    </template>
  </card>
  <card primary="none" :secondary="app.theme.border" flat no-shadow>
    <template v-slot:main>
      <div class="filter-line">
        <span :style="{color: app.theme.primary}" class="note-toolbar-icon iconfont icon-filter"></span>
        <hor-list :primary="app.theme.primary" :secondary="app.theme.strong">
          <gen-btn-flat v-for="item in tags"
                        :key="item" transparent
                        :primary="app.theme.secondary" :secondary="app.theme.primary"
                        :value="tagFilter.indexOf(item) > -1"
                        m @click="changeTagFilter(item)">{{item}}</gen-btn-flat>
        </hor-list>
      </div>
    </template>
  </card>
</template>

<script>
import HorList from "@/components/Generic/HorList/HorList.vue"
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue";
import BtnGroup from "@/components/Generic/BtnGroup/BtnGroup.vue";
import Card from "@/components/Generic/Card/Card.vue";
import GenTextBox from "@/components/Generic/GenTextBox/GenTextBox.vue";
export default {
  name: "ToolBar",
  components: {HorList, GenBtnFlat, GenTextBox, Card, BtnGroup},
  emits: ['update:search', 'update:filter', 'update:tagFilter'],
  props: {
    app: { type: Object },
    search: { type: String },
    filter: { type: Array },
    tags: { type: Array },
    tagFilter: { type: Array }
  },
  data() {
    return {
      filter_: [],
      tagFilter_: []
    }
  },
  methods: {
    changeFilter(item) {
      let index = this.filter_.indexOf(item)
      if (index === -1) {
        this.filter_.push(item)
        this.$emit('update:filter', this.filter_)
      } else if (index > -1) {
        this.filter_.splice(index ,1)
        this.$emit('update:filter', this.filter_)
      }
    },
    changeTagFilter(item) {
      let index = this.tagFilter_.indexOf(item)
      if (index === -1) {
        this.tagFilter_.push(item)
        this.$emit('update:tagFilter', this.tagFilter_)
      } else if (index > -1) {
        this.tagFilter_.splice(index, 1)
        this.$emit('update:tagFilter', this.tagFilter_)
      }
    },
    newNote() {
      this.$router.push({name: 'User/Notes/NoteEditor'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .line {
    margin: .2rem
  }
  .note-toolbar-icon {
    font-size: 1.1rem;
    margin-right: .3rem;
  }
  .search-container {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .filter-line {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
</style>
