<template>
  <div class="hor-container">
    <gen-btn-flat v-if="contentWrapper.width > contentContainer.width" :primary="primary" :secondary="secondary" transparent
      :margin="margin" :border="border" :circle="circle" m @click="scroll(false)">&lt</gen-btn-flat>
    <div ref="contentContainer" class="content-container" @wheel.prevent.stop="onScroll">
      <div ref="contentWrapper" :class="'content-wrapper' + (contentWrapper.disabled ? '' : ' transitional')" :style="{
        transform: 'translateX(' + getScrollLeft + 'px)'}">
        <slot></slot>
      </div>
    </div>
    <gen-btn-flat v-if="contentWrapper.width > contentContainer.width" :primary="primary" :secondary="secondary" transparent
      :margin="margin" :border="border" :circle="circle" m @click="scroll(true)">></gen-btn-flat>
  </div>
</template>

<script>
import _ from 'lodash'
import ResizeObserver from "resize-observer-polyfill";

import btnGroup from "../BtnGroup/BtnGroup.vue"
import GenBtnFlat from "../GenBtnFlat/GenBtnFlat.vue";

export default {
  name: "HorList",
  components: {GenBtnFlat, btnGroup},
  props: {
    primary: { type: String, default: 'black' },
    secondary: { type: String, default: 'white' },
    margin: { type: Boolean, default: false },
    circle: { type: Boolean, default: false},
    border: { type: Boolean, default: false }
  },
  data() {
    return {
      contentContainer: {
        ro: null,
        width: 0
      },
      contentWrapper: {
        ro: null,
        width: 0,
        scrollLeft: 0,
        disabled: false
      }
    }
  },
  computed: {
    getScrollLeft() {
      let min = this.contentContainer.width - this.contentWrapper.width
      if (this.contentWrapper.scrollLeft < min) {
        this.contentWrapper.disabled = true
        return min
      } else {
        this.contentWrapper.disabled = false
        return this.contentWrapper.scrollLeft
      }
    }
  },
  methods: {
    scroll(right) {
      const delta = right ? 1 : -1
      const ready = this.contentWrapper.scrollLeft - (delta * 160)
      if (ready > 0) {
        this.contentWrapper.scrollLeft = 0
      } else if (ready < (this.contentContainer.width - this.contentWrapper.width)) {
        this.contentWrapper.scrollLeft = this.contentContainer.width - this.contentWrapper.width
      } else {
        this.contentWrapper.scrollLeft = ready
      }
    },
    onScroll: _.throttle(
      function(event) {
        const delta = event.deltaY > 0 ? 1 : -1
        if (this.contentWrapper.width > this.contentContainer.width) {
          const ready = this.contentWrapper.scrollLeft - (delta * 160)
          if (ready > 0) {
            this.contentWrapper.scrollLeft = 0
          } else if (ready < (this.contentContainer.width - this.contentWrapper.width)) {
            this.contentWrapper.scrollLeft = this.contentContainer.width - this.contentWrapper.width
          } else {
            this.contentWrapper.scrollLeft = ready
          }
        }
      }, 50, {}
    )
  },
  mounted() {
    this.contentContainer.ro = new ResizeObserver(
      entries => {
        this.contentContainer.width = entries[0].contentRect.width
      }
    )
    this.contentContainer.ro.observe(this.$refs.contentContainer)
    this.contentWrapper.ro = new ResizeObserver(
      entries => {
        this.contentWrapper.width = entries[0].contentRect.width
      }
    )
    this.contentWrapper.ro.observe(this.$refs.contentWrapper)
  }
}
</script>

<style lang="scss" scoped>
.hor-container {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .content-container {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    overflow: scroll hidden;
    scrollbar-width: none;

    .content-wrapper {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
    }
  }
  .content-container::-webkit-scrollbar {
    display: none;
  }
}
</style>
