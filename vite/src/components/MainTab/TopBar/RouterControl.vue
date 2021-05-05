<template>
  <div class="router-control">
    <btn-group>
      <gen-btn :active="/User\/Messages\/*/.test($route.name)"
               @click="message"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-email"></span>
        <span v-if="/User\/Messages\/*/.test($route.name)">
          {{ $t('message.router.message.name')}}
        </span>
      </gen-btn>
      <gen-btn :active="/User\/Activities\/*/.test($route.name)"
               @click="activity"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-camera"></span>
        <span v-if="/User\/Activities\/*/.test($route.name)">
          {{ $t('message.router.activity.name') }}
        </span>
      </gen-btn>
      <gen-btn :active="/User\/Home\/*/.test($route.name)"
               @click="home"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-home"></span>
        <span v-if="/User\/Home\/*/.test($route.name)">
          {{ $t('message.router.home.name') }}</span>
      </gen-btn>
      <gen-btn :active="/User\/Notes\/*/.test($route.name)"
               @click="note"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-edit"></span>
        <span v-if="/User\/Notes\/*/.test($route.name)">
          {{ $t('message.router.note.name') }}
        </span>
        <span v-if="/User\/Notes\/NoteEditor\/*/.test($route.name)"
              class="router-icon iconfont icon-elipsis"></span>
      </gen-btn>
      <gen-btn :active="/User\/Codes\/*/.test($route.name)"
               @click="code"
               :primary="app.theme.primary"
               :secondary="app.theme.secondary"
               transparent xl>
        <span class="router-icon iconfont icon-code"></span>
        <span v-if="/User\/Codes\/*/.test($route.name)">
          {{ $t('message.router.code.name') }}
        </span>
      </gen-btn>
    </btn-group>
  </div>
</template>

<script>
import GenBtn from "@/components/Generic/GenBtn/GenBtn.vue";
import BtnGroup from "../../Generic/BtnGroup/BtnGroup.vue";

export default {
  name: "RouterControl",
  components: {BtnGroup, GenBtn},
  props: {
    app: Object
  },
  methods: {
    me() {
      if (this.$route.name !== 'User/Me') {
        this.$router.push({name: 'User/Me'})
      }
    },
    message() {
      if (this.$route.name !== 'User/Messages') {
        this.$router.push({name: 'User/Messages'})
      }
    },
    activity() {
      if (this.$route.name !== 'User/Activities') {
        this.$router.push({name: 'User/Activities'})
      }
    },
    home() {
      if (this.$route.name !== 'User/Home') {
        this.$router.push({name: 'User/Home'})
      }
    },
    note() {
      if (this.$route.name !== 'User/Notes') {
        this.$router.push({name: 'User/Notes'})
      }
    },
    code() {
      if (this.$route.name !== 'User/Codes') {
        this.$router.push({name: 'User/Codes'})
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
