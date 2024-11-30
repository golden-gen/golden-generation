/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

interface initialValuesType {
  surname: string
  othersName: string
  class: string
  email: string
  gender: string
  phoneNo: string
  school: string
}
const RegisterPage = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const initialValues: initialValuesType = {
    surname: '',
    othersName: '',
    class: '',
    email: '',
    gender: '',
    phoneNo: '',
    school: '',
  }

  const register = (values, { resetForm }) => {
    setSubmitting(true)
    // http://localhost:5000/
    // https://golden-api-napf.onrender.com
    axios
      .post(`https://golden-api-napf.onrender.com/api/v1/reg/student`, values)
      .then((res) => {
        // console.log({ res: res.data.message });
        setSubmitting(false)
        resetForm()
        toast(res.data.message, {
          type: 'success',
        })
      })
      .catch((error) => {
        setSubmitting(false)
        console.log({ error })
        const message = error.response?.mesage || error.response?.data

        if (message?.includes('E11000 duplicate')) {
          toast('Phone number already used by another applicant', {
            type: 'error',
          })
        } else {
          toast(message, {
            type: 'error',
          })
        }
      })
  }
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: register,
  })
 
  return (
    <>
      <ToastContainer />
      <div className="main bg-form">
        <div className="container ">
          <div className="signup-content ">
            {/* <div className="signup-img">
            <img src="/images/signup-img.jpg" alt="" />
          </div> */}
            <div className="signup-form form">
              <form
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
                <h2 className="text-center text-white">
                  Registration Page For GG2024
                </h2>
                {/* <div className="form-row"> */}
                <div className="form-group">
                  <label htmlFor="surname">Surname:</label>
                  <input
                    className="w-100"
                    type="text"
                    name="surname"
                    placeholder="Enter your surname here"
                    value={values.surname}
                    id="surname"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="other_name">Other Names:</label>
                  <input
                    type="text"
                    name="othersName"
                    value={values.othersName}
                    id="other_name"
                    placeholder="Enter your other names here"
                    required
                    onChange={handleChange}
                  />
                </div>
                {/* </div> */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="text"
                    name="phoneNo"
                    id="phone"
                    value={values.phoneNo}
                    placeholder="e.g 08012345678"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    placeholder="e.g yourmail@gmail.com"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="school">School:</label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    value={values.school}
                    placeholder="Golden generation school"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={values.address}
                    id="address"
                    placeholder="Enter your home address here"
                    required
                    onChange={handleChange}
                  />
                </div>
                {/* <div class="form-radio">
                            <label for="gender" class="radio-label">Gender :</label>
                            <div class="form-radio-item">
                                <input type="radio" name="gender" id="male" value="male" />
                                <label for="male">Male</label>
                                <span class="check"></span>
                            </div>
                            <div class="form-radio-item">
                                <input type="radio" name="gender" id="female" value="female" />
                                <label for="female">Female</label>
                                <span class="check"></span>
                            </div>
                        </div> */}
                {/* <div className="form-row d-flex"> */}
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <div className="form-select">
                    <select
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      required
                    >
                      <option>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="class">Class:</label>
                  <div className="form-select">
                    <select
                      name="class"
                      id="class"
                      value={values.class}
                      onChange={handleChange}
                      required
                    >
                      <option>Select your class</option>
                      <option value="ss1">SSS 1</option>
                      <option value="ss2">SSS 2</option>
                      <option value="ss3">SSS 3</option>
                    </select>
                    
                  </div>
                </div>
                <div className="form-submit">
                  <button
                    type="submit"
                    className="submit"
                    name="submit"
                    id="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel2"
                        >
                          Modal 2
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Hide this modal and show the first with the button
                        below.
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Back to first
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
