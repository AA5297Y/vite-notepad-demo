const fetch_ = {
  get: async function (url, params, onComplete, onFailed) {
    let req = new Request(url)
    await fetch(req, {
      method: 'POST',
      cache: 'reload',
      body: params
    }).then(response => {
      if (response.ok) {
        if (onComplete !== null && typeof onComplete === 'function') {
          onFailed(response)
        }
      }

      let json
      response.json().then((data) => {
        json = data
        if (onComplete !== null && typeof onComplete === 'function') {
          onComplete(json)
        }
      })
    })
  },
  post: async function (url, body, onComplete, onFailed) {
    let req = new Request(url)
    await fetch(req, {
      method: 'POST',
      cache: 'reload',
      body: body
    }).then(response => {
      if (!response.ok) {
        if (onComplete !== null && typeof onComplete === 'function') {
          onFailed(response)
        }
        return
      }

      let json
      response.json().then((data) => {
        json = data
        if (onComplete !== null && typeof onComplete === 'function') {
          onComplete(json)
        }
      })
    })
  }
}

export default fetch_
