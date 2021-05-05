<template>
  <div class="recent-control" :style="{
    color: app.theme.secondary,
    border: border ? 'solid 1px' : ''
  }">
    <h4>{{$t('message.component.leftTab.onTopList.title')}}</h4>
    <gen-list-item v-for="item in onTopList" :key="item.id"
      :primary="app.theme.secondary" :secondary="app.theme.primary">
      <span>test</span>
    </gen-list-item>
  </div>
</template>

<script>
import GenListItem from "@/components/Generic/GenListItem/GenListItem.vue";
export default {
  name: "OnTopList",
  components: {GenListItem},
  props: {
    app: { type: Object },
    border: { type: Boolean, default: false }
  },
  data() {
    return {
      onTopList: [
        {
          id: 0,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 1,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 2,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 4,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 5,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 6,
          type: 'note',
          title: 'test',
          to: ''
        },
        {
          id: 7,
          type: 'note',
          title: 'test',
          to: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h4 {
    padding: 0.5rem;
  }
  .recent-control {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;

    margin: 1rem;
    border: none;
    overflow: visible;
  }
  .recent-control::-webkit-scrollbar {
    width: 3px;
  }
  .recent-control::-webkit-scrollbar-track {
    overflow: visible;
    background: transparent;
  }
  .recent-control::-webkit-scrollbar-thumb {
    width: 4px;
    padding: 5px;
    background: white;
  }
</style>
