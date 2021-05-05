import fetch_ from '../fetch.js'

export default {
  login: (formData, onComplete, onFailed) => {
    fetch_.post('/api/login', formData, onComplete, onFailed)
  },
  logined: (formData, onComplete, onFailed) => {
    fetch_.post('/api/user/logined', formData, onComplete, onFailed)
  }
}
