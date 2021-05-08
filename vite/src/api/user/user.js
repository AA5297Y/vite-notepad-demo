import fetch_ from '../fetch.js'

export default {
  login: (formData, onComplete, onFailed) => {
    fetch_.post('/api/login', formData, onComplete, onFailed)
  },
  getLogined: (formData, onComplete, onFailed) => {
    fetch_.post('/api/logined', formData, onComplete, onFailed)
  },
  signUp: (formData, onComplete, onFailed) => {
    fetch_.post('/api/signUp', formData, onComplete, onFailed)
  }
}
