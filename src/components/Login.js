import React from 'react'
import { useFormik } from 'formik'
import "./Login.css"

export default function Login () {
  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (values.email.length < 4) {
      errors.email = 'Must be 5 characters or more'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    } else if (values.password === '12345678') {
      errors.password = 'Must not be 12345678 !!!'
    }
    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }

  })

  return (
  <div className='login-card'>
    <h1 className='title'>Login </h1>
    <form className='form-card' onSubmit={formik.handleSubmit}>

      <label className='label' htmlFor="email">Email Address</label>

      <input
        className='form-control'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
      {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      <label className='label' htmlFor="password">Password</label>
      <input
        className='form-control'
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}/>
      {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
      <button className='btn btn-primary button' type="submit">Login</button>

    </form>
  </div>)
}