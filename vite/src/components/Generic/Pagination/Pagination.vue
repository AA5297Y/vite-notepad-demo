<template>
  <div class="pagination">
    <div ref="contentWrapper" class="content-wrapper">
      <template v-for="item in compPageSize" :key="item.id">
        <slot :item="item"></slot>
      </template>
    </div>
    <div class="pagination-control">
      <card primary="none" :secondary="secondary" flat>
        <template v-slot:main>
          <btn-group>
            <gen-btn-flat :primary="primary" :secondary="secondary" transparent>&lt</gen-btn-flat>
            <gen-btn-flat v-for="p in compPageCount" :key="p" :primary="primary" :secondary="secondary" transparent>{{p}}</gen-btn-flat>
            <gen-btn-flat :primary="primary" :secondary="secondary" transparent>></gen-btn-flat>
          </btn-group>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
import BtnGroup from "../BtnGroup/BtnGroup.vue";
import GenBtnFlat from "../GenBtnFlat/GenBtnFlat.vue";
import Card from "../Card/Card.vue";

export default {
  name: "Pagination",
  components: {Card, GenBtnFlat, BtnGroup},
  props: {
    primary: { type: String, default: 'white' },
    secondary: { type: String, default: 'black' },
    page: { type: Array, default: [] },
    refHeight: { type: Number, default: 100 },
    pagesCount: { type: Number, default: 1 }
  },
  emits: ['requestMore'],
  data() {
    return {
      pageSize: 1,
      contentWrapper: {
        ro: null,
        height: 0
      }
    }
  },
  computed: {
    compPageSize() {
      return this.page.filter((value, index) => { return index < this.pageSize })
    },
    compPageCount() {
      const arr = []
      for (let i = 1; i <= this.pagesCount; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  mounted() {
    this.contentWrapper.ro = new ResizeObserver(entries => {
      this.contentWrapper.height = entries[0].contentRect.height

      this.onResize()
    })
    this.contentWrapper.ro.observe(this.$refs.contentWrapper)
  },
  methods: {
    onResize() {
      const resize = Math.floor(this.contentWrapper.height / this.refHeight)
      if (this.pageSize !== resize) {
        this.pageSize = resize
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;

    .content-wrapper {
      position: relative;
      display: flex;
      flex: 1 1 auto;
      flex-flow: column nowrap;
      overflow-y: scroll;

      scrollbar-width: none;
    }
    .content-wrapper::-webkit-scrollbar {
      display: none;
    }

    .pagination-control {
      height: 50px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
