<template>
  <div class="search-container transitional">
    <card primary="transparent"
          :secondary="app.theme.primary"
          flat no-shadow>
      <template v-slot:head>
        <h2 :class="'transitional ' + (!folded ? 'line' : 'line-fold')">
          {{$t('message.router.discovery.search.titleL')}}
          <span :style="{color: app.theme.strong}">vite-demo</span>
          {{$t('message.router.discovery.search.titleR')}}
        </h2>
      </template>
      <template v-slot:main>
        <btn-group>
          <gen-text-box :value="search"
                        @update:value="updateSearchText"
                        :primary="app.theme.primary"
                        :secondary="app.theme.strong"
                        width="20rem" flat xl></gen-text-box>
          <gen-btn-flat @click="fold"
                        :primary="app.theme.primary"
                        :secondary="app.theme.strong" l>
            {{$t('message.button.search')}}
          </gen-btn-flat>
        </btn-group>
        <h5 :class="'transitional ' + (!folded ? 'search-title' : 'search-title-fold')">
          {{$t('message.button.search')}}
          <span :style="{color: app.theme.strong}">uid</span>
          ,
          <span :style="{color: app.theme.strong}">
            {{$t('message.router.discovery.type.user')}}
          </span>
          ,
          <span :style="{color: app.theme.strong}">
            {{$t('message.router.discovery.type.activity')}}
          </span>
          ,
          <span :style="{color: app.theme.strong}">
            {{$t('message.router.discovery.type.note')}}
          </span>
        </h5>
      </template>
    </card>
    <div v-if="folded" class="unfold-btn transitional">
      <gen-btn-flat @click="unFold"
                    :primary="app.theme.secondary"
                    :secondary="app.theme.primary"
                    circle transparent m>
        <span class="iconfont icon-arrow-down"></span>
      </gen-btn-flat>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchContainer",
  props: {
    app: {type: Object},
    search: {type: String, default: ''}
  },
  emits: ['update:search'],
  data() {
    return {
      folded: false
    }
  },
  methods: {
    updateSearchText(str) {
      this.$emit('update:search', str)
    },
    fold() {
      this.folded = true
    },
    unFold() {
      this.folded = false
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    margin: 5rem 0;
    flex: 1 1 auto;
    justify-content: center;
  }
  .line-fold {
    margin: 0;
    flex: 1 1 auto;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    line-height: 0;
  }

  .unfold-btn {
    position: absolute;
    right: 2rem;
  }

  .search-title {
    margin: 1rem 0;
  }
  .search-title-fold {
    margin:0;
    visibility: hidden;
    opacity: 0;
    line-height: 0;
  }
}
</style>
