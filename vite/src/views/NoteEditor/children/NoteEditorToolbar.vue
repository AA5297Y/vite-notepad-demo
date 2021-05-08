<template>
  <card :primary="app.theme.primary" :secondary="app.theme.secondary" flat no-shadow>
    <template v-slot:main>
      <div class="line">
        <btn-group>
          <gen-btn-flat @click="goBack"
                        :primary="app.theme.primary"
                        :secondary="app.theme.strong" square m>
            <span class="iconfont icon-direction-left"></span>
          </gen-btn-flat>
          <gen-btn-flat @click="save"
                        :primary="app.theme.primary"
                        :secondary="app.theme.strong" m>
            <span class="note-toolbar-icon iconfont icon-save"></span>
            {{$t('message.router.noteEditor.save')}}
          </gen-btn-flat>
          <gen-btn-flat @click="saveAndPublish"
                        :primary="app.theme.primary"
                        :secondary="app.theme.strong" m>
            <span class="note-toolbar-icon iconfont icon-navigation"></span>
            {{$t('message.router.noteEditor.publish')}}
          </gen-btn-flat>
          <gen-btn-flat :value="detail.working"
                        :primary="app.theme.primary"
                        :secondary="app.theme.border" m>
            <span class="note-toolbar-icon iconfont icon-history"></span>
            <span>{{$t('message.router.note.working')}}</span>
          </gen-btn-flat>
          <spacing></spacing>
          <gen-btn-flat v-model:value="detail.onTop"
                        :primary="app.theme.primary"
                        :secondary="app.theme.border"
                        switches m>
            <span class="note-toolbar-icon iconfont icon-top"></span>
            {{$t('message.router.note.onTop')}}
          </gen-btn-flat>
          <gen-btn-flat :value="detail.private"
                        @click="setPrivate"
                        :primary="app.theme.primary"
                        :secondary="app.theme.border"
                        m>
            <span class="note-toolbar-icon iconfont icon-lock"></span>
            <span>{{$t('message.router.note.private')}}</span>
          </gen-btn-flat>
          <gen-btn-flat :value="detail.public"
                        @click="setPublic"
                        :primary="app.theme.primary"
                        :secondary="app.theme.border"
                        m>
            <span class="note-toolbar-icon iconfont icon-share"></span>
            <span>{{$t('message.router.note.public')}}</span>
          </gen-btn-flat>
          <gen-btn-flat v-model:value="detail.collection"
                        :primary="app.theme.primary"
                        :secondary="app.theme.border"
                        switches m>
            <span class="note-toolbar-icon iconfont icon-fabulous"></span>
            <span>{{$t('message.router.note.collection')}}</span>
          </gen-btn-flat>
        </btn-group>
      </div>
      <div class="line">
        <btn-group>
          <span>{{$t('message.router.noteEditor.title')}}:&nbsp</span>
          <gen-text-box v-model:value="title"
                        :primary="app.theme.border"
                        :secondary="app.theme.strong"
                        width="20rem" flat m></gen-text-box>
        </btn-group>
      </div>
      <div class="line">
        <btn-group>
          <span :style="{lineHeight: '3rem'}">{{$t('message.router.noteEditor.desc')}}:&nbsp</span>
          <div class="note-desc-container">
            <div id="note-desc"></div>
          </div>
        </btn-group>
      </div>
      <div class="line">
        <btn-group vetAlignCenter>
          <span :style="{lineHeight: '3rem'}">{{$t('message.router.noteEditor.tags')}}:&nbsp</span>
          <hor-list>
            <gen-btn-flat v-for="tag in tags"
                          :ket="tag"
                          :primary="app.theme.card"
                          :secondary="app.theme.secondary"
                          disabled margin m>
              {{tag}}&nbsp
              <gen-btn-flat @click="deleteTag(tag)"
                            :primary="app.theme.card"
                            :secondary="app.theme.strong"
                            square m>
                <span class="iconfont icon-close"></span>
              </gen-btn-flat>
            </gen-btn-flat>
            <gen-btn-flat :primary="app.theme.card"
                          :secondary="app.theme.secondary"
                          disabled margin m>
              <gen-text-box v-model:value="newTag"
                            :primary="app.theme.border"
                            :secondary="app.theme.strong"
                            width="8rem" flat m></gen-text-box>
              <gen-btn-flat @click="addTag"
                            :primary="app.theme.card"
                            :secondary="app.theme.strong"
                            square m>
                <span class="iconfont icon-add"></span>
              </gen-btn-flat>
            </gen-btn-flat>
          </hor-list>
        </btn-group>
      </div>
    </template>
  </card>
</template>

<script>
import Quill from 'quill'

export default {
  name: "NoteEditorToolbar",
  props: {
    app: { type: Object }
  },
  emits: ['save', 'saveAndPublish'],
  data() {
    return {
      quill: null,
      detail: {
        onTop: false,
        private: false,
        public: true,
        collection: false,
        working: true
      },
      title: '',
      tags: ['test', 'ready', 'editor', 'javascript'],
      newTag: '',
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    save() {
      let note = {
        detail: this.detail,
        title: this.title,
        tags: this.tags,
        desc: this.quill.getContents()
      }

      this.$emit('save', note)
    },
    saveAndPublish() {
      let note = {
        detail: this.detail,
        title: this.title,
        tags: this.tags,
        desc: this.quill.getContents()
      }

      this.$emit('saveAndPublish', note)
    },
    setPrivate() {
      this.detail.private = true
      this.detail.public = false
    },
    setPublic() {
      this.detail.private = false
      this.detail.public = true
    },
    addTag() {
      let index = this.tags.indexOf(this.newTag)
      if (!(index >= 0)) {
        this.tags.push(this.newTag)
      }
      this.newTag = ''
    },
    deleteTag(target) {
      let index = this.tags.indexOf(target)
      if (index >= 0) {
        this.tags.splice(index, 1)
      }
    }
  },
  mounted() {
    this.quill = new Quill('#note-desc', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
          ['link'],
          ['clean']
        ]
      },
      theme: 'snow'
    })
  },
  beforeUnmount() {
    this.quill = null
  }
}
</script>

<style scoped>
  .note-toolbar-icon {
    margin-right: .3rem;
  }
  .line {
    margin: .3rem;
  }

  .note-desc-container {
    min-height: 8rem;
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;
  }
</style>

<style>
.ql-container.ql-snow {
  border: none;
}
</style>
