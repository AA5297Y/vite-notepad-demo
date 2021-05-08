<template>
  <div class="activity-filter-container">
    <hor-list :primary="app.theme.primary" :secondary="app.theme.primary" margin circle>
      <card primary="transparent" :secondary="app.theme.primary" flat no-shadow>
        <template v-slot:head>
          <avatar @click="changeSelected(app.author)" :width="60" :height="60"
                  :primary="app.theme.primary" :secondary="app.theme.secondary"></avatar>
        </template>
        <template v-slot:main>
          <div class="title">
            {{app.author.name}}
          </div>
        </template>
        <template v-slot:action>
          <div :class="app.author.uid === selected.uid ? 'select expand' : 'select'"></div>
        </template>
      </card>
      <card v-for="sub in subs" :key="sub.id" primary="transparent"
            :secondary="app.theme.primary" flat no-shadow>
        <template v-slot:head>
          <avatar @click="changeSelected(sub)" :width="60" :height="60"
                  :primary="app.theme.primary" :secondary="app.theme.secondary"></avatar>
        </template>
        <template v-slot:main>
          <div class="title">
            {{sub.authorName}}
          </div>
        </template>
        <template v-slot:action>
          <div :class="sub.uid === selected.uid ? 'select expand' : 'select'"></div>
        </template>
      </card>
    </hor-list>
  </div>
</template>

<script>
export default {
  name: "ActivityFilter",
  props: {
    app: { type: Object },
    selected: { type: Object }
  },
  emits: ['update:selected'],
  data() {
    return {
      subs: [
        {id: 0, uid: 100000001, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 1, uid: 100000002, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 2, uid: 100000003, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 3, uid: 100000004, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 4, uid: 100000005, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 5, uid: 100000006, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 6, uid: 100000007, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 7, uid: 100000008, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 8, uid: 100000009, authorName: 'user1', authorIcon: 'userIcon'},
        {id: 9, uid: 100000010, authorName: 'user1', authorIcon: 'userIcon'}
      ],
    }
  },
  methods: {
    changeSelected(target) {
      if (target.uid === this.selected.uid) {
        this.$emit('update:selected', {})
        this.$router.push({ name: 'Author/Activities/All'})
      } else {
        this.$emit('update:selected', target)
        this.$router.push({ name: 'Author/Activities/Follow', params: { uid: target.uid } })
      }
    }
  }
}
</script>

<style scoped>
  .activity-filter-container {
    position: relative;
    justify-content: stretch;
    align-items: stretch;
    bottom: -.6em;
  }

  .title {
    margin: .3rem;
    overflow: hidden;
  }

  .select {
    bottom: -1rem;
    position: relative;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-self: center;
    align-self: center;
    background: white;
    transform: rotate(45deg);
    opacity: 0;

    transition: all 0.3s;
  }

  .expand {
    bottom: -.5rem;

    opacity: 1;
  }
</style>
