export default (values) => {
  return new Promise(function (resolve) {
    resolve()
  })
    .then(() => {
      if (['a@a.com', 'paul', 'george', 'ringo'].includes(values.email)) {
        throw { email: 'This email already registered' }
      }
    })
}
