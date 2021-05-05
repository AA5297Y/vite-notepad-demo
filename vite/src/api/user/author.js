import fetch_ from "../fetch"

export default {
  getAuthor(formData, onComplete, onFailed) {
    fetch_.post('/api/author/getAuthor', formData, onComplete, onFailed)
  }
}
