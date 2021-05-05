<template>
  <div class="vet-container" :style="{
    flex: flex ? '1 1 auto' : '0 1 auto',
    alignItems: flex ? 'stretch' : 'center'
  }">
    <div ref="contentContainer" class="content-container" @wheel.prevent.stop="onScroll" :style="{
      flex: flex ? '1 1 auto' : '0 1 auto',
      alignItems: flex ? 'stretch' : 'center'
    }">
      <div ref="contentWrapper" :class="'content-wrapper' + (contentWrapper.disabled ? '' : ' transitional')" :style="{
        flex: flex ? '1 1 auto' : '0 1 auto',
        transform: 'translateY(' + getScrollTop + 'px)'}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import ResizeObserver from "resize-observer-polyfill";

import btnGroup from "../BtnGroup/BtnGroup.vue"
import GenBtnFlat from "../GenBtnFlat/GenBtnFlat.vue";

export default {
  name: "VetList",
  components: {GenBtnFlat, btnGroup},
  props: {
    primary: { type: String, default: 'black' },
    secondary: { type: String, default: 'white' },
    margin: { type: Boolean, default: false },
    circle: { type: Boolean, default: false},
    border: { type: Boolean, default: false },
    flex: { type: Boolean, default: false }
  },
  data() {
    return {
      contentContainer: {
        ro: null,
        height: 0,
      },
      contentWrapper: {
        ro: null,
        height: 0,
        scrollTop: 0,
        disabled: false
      }
    }
  },
  computed: {
    getScrollTop() {
      let min = this.contentContainer.height - this.contentWrapper.height
      if (this.contentWrapper.scrollTop < min) {
        this.contentWrapper.disabled = true
        return min
      } else {
        this.contentWrapper.disabled = false
        return this.contentWrapper.scrollTop
      }
    }
  },
  methods: {
    onScroll: _.throttle(
      function(event) {
        const delta = event.deltaY > 0 ? 1 : -1
        if (this.contentWrapper.height > this.contentContainer.height) {
          const ready = this.contentWrapper.scrollTop - (delta * 160)
          if (ready > 0) {
            this.contentWrapper.scrollTop = 0
          } else if (ready < (this.contentContainer.height - this.contentWrapper.height)) {
            this.contentWrapper.scrollTop = this.contentContainer.height - this.contentWrapper.height
          } else {
            this.contentWrapper.scrollTop = ready
          }
        } else if (this.contentWrapper.scrollTop !== 0) {
          this.contentWrapper.scrollTop = 0
        }
      }, 50, {}
    )
  },
  mounted() {
    this.contentContainer.ro = new ResizeObserver(
      entries => {
        this.contentContainer.height = entries[0].contentRect.height
      }
    )
    this.contentContainer.ro.observe(this.$refs.contentContainer)
    this.contentWrapper.ro = new ResizeObserver(
      entries => {
        this.contentWrapper.height = entries[0].contentRect.height
      }
    )
    this.contentWrapper.ro.observe(this.$refs.contentWrapper)
  }
}
</script>

<style lang="scss" scoped>
.vet-container {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .content-container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden scroll;

    scrollbar-width: none;

    .content-wrapper {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
    }
  }
  .content-container::-webkit-scrollbar {
    display: none;
  }
}
</style>
