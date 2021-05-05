<template>
  <div class="note-view" :style="{color: 'deepskyblue'}">
    <div class="layout">
      <tool-bar :app="app" :search="search" :filter="filter" :tags="tags" :tagFilter="tagFilter"
                @update:search="updateSearch" @update:filter="updateFilter" @update:tagFilter="updateTagFilter"></tool-bar>
      <div class="notes-container">
        <note-pagination :search="search" :app="app" :filter="filter" :tagFilter="tagFilter" :primary="app.theme.card" :secondary="app.theme.strong"></note-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import GenBtnFlat from "@/components/Generic/GenBtnFlat/GenBtnFlat.vue"
import Card from "@/components/Generic/Card/Card.vue"
import Spacing from "@/components/Generic/Spacing/Spacing.vue";
import ToolBar from "./children/ToolBar.vue";
import NotePagination from "./children/NotePagination.vue";

export default {
  name: "Note",
  components: { NotePagination, ToolBar, Spacing, Card, GenBtnFlat },
  props: {
    app: { type: Object }
  },
  data() {
    return {
      search: '',
      filter: [],
      tags: ['html', 'css', 'js', 'vue', 'vue-router', 'vite', 'lodash', 'resize-observer-polyfill', 'spring-boot'],
      tagFilter: []
    }
  },
  methods: {
    updateSearch(searchStr) {
      this.search = searchStr
    },
    updateFilter(filter) {
      this.filter = filter
    },
    updateTagFilter(tagFilter) {
      this.tagFilter = tagFilter
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-view {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    padding-top: 1rem;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;

    .layout {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1 1 auto;
      flex-flow: column nowrap;
      justify-content: stretch;
      align-items: stretch;
      overflow: hidden;

      .notes-container {
        width: 100%;
        display: flex;
        position: relative;
        flex: 1 1 auto;
        justify-content: stretch;
        align-items: stretch;
        overflow: scroll;

        padding-bottom: 0;
        background: white;
      }
    }
  }
</style>
