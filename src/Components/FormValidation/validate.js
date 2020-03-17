const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email) {
    errors.email = 'Invalid email address'
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required'
  }
  if (values.password != values.repeatPassword) {
    errors.repeatPassword = 'Passwords must match'
  }
  if (values.password)
    if (values.password.length < '6') {
      errors.password = 'Password must be longer than 6 symbols'
    }
  return errors
}

export default validate