<template>
  <div class="router-control">
    <btn-group>
      <gen-btn :active="/Author\/Discovery\/*/.test($route.name)"
               @click="discovery"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-search"></span>
        <span v-if="/Author\/Discovery\/*/.test($route.name)">
          {{ $t('message.router.discovery.name')}}
        </span>
      </gen-btn>
      <gen-btn :active="/Author\/Activities\/*/.test($route.name)"
               @click="activity"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-camera"></span>
        <span v-if="/Author\/Activities\/*/.test($route.name)">
          {{ $t('message.router.activity.name') }}
        </span>
      </gen-btn>
      <gen-btn :active="/Author\/Home\/*/.test($route.name)"
               @click="home"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-home"></span>
        <span v-if="/Author\/Home\/*/.test($route.name)">
          {{ $t('message.router.home.name') }}</span>
      </gen-btn>
      <gen-btn :active="/Author\/Notes\/*/.test($route.name)"
               @click="note"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-edit"></span>
        <span v-if="/Author\/Notes\/*/.test($route.name)">
          {{ $t('message.router.note.name') }}
        </span>
        <span v-if="/Author\/Notes\/NoteEditor\/*/.test($route.name)"
              class="router-icon iconfont icon-elipsis"></span>
      </gen-btn>
      <gen-btn :active="/Author\/Messages\/*/.test($route.name)"
               @click="message"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-email"></span>
        <span v-if="/Author\/Messages\/*/.test($route.name)">
          {{ $t('message.router.message.name')}}
        </span>
      </gen-btn>
    </btn-group>
  </div>
</template>

<script>
export default {
  name: "RouterControl",
  props: {
    app: Object
  },
  methods: {
    me() {
      if (this.$route.name !== 'Author/Me') {
        this.$router.push({name: 'Author/Me'})
      }
    },
    discovery() {
      if (this.$route.name !== 'Author/Discovery') {
        this.$router.push({name: 'Author/Discovery'})
      }
    },
    activity() {
      if (this.$route.name !== 'Author/Activities') {
        this.$router.push({name: 'Author/Activities'})
      }
    },
    home() {
      if (this.$route.name !== 'Author/Home') {
        this.$router.push({name: 'Author/Home'})
      }
    },
    note() {
      if (this.$route.name !== 'Author/Notes') {
        this.$router.push({name: 'Author/Notes'})
      }
    },
    message() {
      if (this.$route.name !== 'Author/Messages') {
        this.$router.push({name: 'Author/Messages'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .router-control {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;

    .router-icon {
      font-size: 20px;
      margin: 0 5px;
    }
  }
</style>
