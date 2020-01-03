function fetchOption(method, body) {
  let data = {
    method: method,
    headers: {
      'Authorization': 'Token ' + window.sessionStorage.getItem('jwtSecret'),
      'Content-type': 'application/json'
    },
    body: body
  }
  return data
}

export { fetchOption }