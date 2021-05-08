<template>
  <div class="note-editor-view">
    <vet-list flex>
      <div class="layout">
        <note-editor-toolbar :app="app"
                             @save="save"
                             @saveAndPublish="saveAndPublish"></note-editor-toolbar>
        <div class="note-editor-container">
          <div id="note-editor" class="note-editor"></div>
        </div>
      </div>
    </vet-list>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import NoteEditorToolbar from "./children/NoteEditorToolbar.vue";

export default {
  name: "NoteEditor",
  components: { NoteEditorToolbar },
  props: {
    app: { type: Object }
  },
  data() {
    return {
      quill: null,
      note: {
        title: '',
        desc: {},
        tags: [],
        content: {}
      }
    }
  },
  methods: {
    save(note) {
      note.content = this.quill.getContents()
      console.log(note)
    },
    saveAndPublish(note) {
      note.content = this.quill.getContents()
      this.quill.get
      console.log(note)
    }
  },
  mounted() {
    const toolbarOptions = [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{align: []}],
      [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]

    this.quill = new Quill('#note-editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow'
    })
  },
  beforeUnmount() {
    this.quill = null
  }
}
</script>

<style lang="scss" scoped>
  .note-editor-view {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;

    background: white;
    overflow: visible;

    .layout {
      position: relative;
      flex-flow: column nowrap;
      justify-content: stretch;
      align-items: stretch;
      overflow: hidden;

      .note-editor-container {
        min-height: 16rem;
        position: relative;
        flex-flow: column nowrap;
        justify-content: stretch;
        align-items: stretch;
        overflow: hidden;

        padding: 1rem;
      }
    }
  }
</style>

<style>
.ql-formats {
  margin: 0;
}
.ql-toolbar.ql-snow {
  border: none;
  border-bottom: solid 1px lightgrey;
  white-space: normal;
}
.ql-snow .ql-editor pre.ql-syntax {
  background: #555964;
  border-radius: 0;
}
</style>
