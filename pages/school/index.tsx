/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface initialValueStudent {
  surname: string
  othersName: string
  class: string
  email: string
  gender: string
  phoneNo: string
}
interface initialValuesType {
  schoolName: string
  schoolAddress: string
  candidate1: initialValueStudent
  candidate2: initialValueStudent
}
const SchoolRegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const initialValues: initialValuesType = {
    schoolName: '',
    schoolAddress: '',
    candidate1: {
      surname: '',
      othersName: '',
      class: '',
      email: '',
      gender: '',
      phoneNo: '',
    },
    candidate2: {
      surname: '',
      othersName: '',
      class: '',
      email: '',
      gender: '',
      phoneNo: '',
    },
  }

  const register = (values, { resetForm }) => {
    setIsSubmitting(true)
    const data = [
      {
        schoolAddress: values.schoolAddress,
        schoolName: values.schoolName,
        ...values.candidate1,
      },
      {
        schoolAddress: values.schoolAddress,
        schoolName: values.schoolName,
        ...values.candidate2,
      },
    ]
    console.log({ data })
    axios
      .post(`https://golden-api-napf.onrender.com/api/v1/reg/school`, data)
      .then((res) => {
        console.log({ res })
        setIsSubmitting(false)
        resetForm()
        toast(res.data.message, {
          type: 'success',
        })
      })
      .catch((error) => {
        setIsSubmitting(false)
        console.log({ error })
        console.log({ error })
        const message = error.response?.mesage || error.response?.data

        if (message.includes('E11000 duplicate')) {
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
  console.log({ values })
  return (
    <div className="main bg-form">
      <div className="container">
        <div className="signup-content">
          {/* <div className="signup-img">
            <img src="images/signup-img.jpg" alt="" />
          </div> */}
          <div className="signup-form form">
            <form
              onSubmit={handleSubmit}
              className="register-form"
              id="register-form"
            >
              <h2 className="text-center text-white">
                School Registration Page For GG2022
              </h2>
              {/* <div className="form-row"> */}
              <div className="form-group">
                <label htmlFor="school">School Name :</label>
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  onChange={handleChange}
                  placeholder="enter school name"
                  className="w-100"
                  value={values.schoolName}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">School Address :</label>
                <input
                  type="text"
                  name="schoolAddress"
                  id="address"
                  onChange={handleChange}
                  placeholder="enter your school address"
                  className="w-100"
                  value={values.schoolAddress}
                  required
                />
              </div>
              {/* </div> */}
              <fieldset>
                <legend className="text-white">
                  First Participant Details
                </legend>

                <div className="form-group">
                  <label htmlFor="surname">Surname :</label>
                  <input
                    type="text"
                    className="w-100"
                    name="candidate1.surname"
                    onChange={handleChange}
                    id="surname"
                    value={values.candidate1.surname}
                    placeholder="enter your surname"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="other_name">Other Names :</label>
                  <input
                    className="w-100"
                    type="text"
                    name="candidate1.othersName"
                    onChange={handleChange}
                    value={values.candidate1.othersName}
                    placeholder="enter your other names"
                    id="other_name"
                    required
                  />
                </div>

                {/* <div className="form-row"> */}
                <div className="form-group ">
                  <label htmlFor="className">className :</label>
                  <div className="form-select">
                    <select
                      name="candidate1.class"
                      id="candidate1.class"
                      value={values.candidate1.class}
                      onChange={handleChange}
                      required
                    >
                      <option value="" className="text-white">
                        Select your Class
                      </option>
                      <option value="ss1">SSS 1</option>
                      <option value="ss2">SSS 2</option>
                      <option value="ss3">SSS 3</option>
                    </select>
                    <span className="select-icon">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
                {/* </div> */}

                <div className="form-group">
                  <label htmlFor="email">Email Address :</label>
                  <input
                    className="w-100"
                    type="candidate1.email"
                    name="candidate1.email"
                    onChange={handleChange}
                    value={values.candidate1.email}
                    placeholder="enter email address"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">Phone Number :</label>
                  <input
                    className="w-100"
                    type="candidate1.phoneNo"
                    name="candidate1.phoneNo"
                    onChange={handleChange}
                    value={values.candidate1.phoneNo}
                    placeholder="enter your phone number"
                    id="phoneNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender :</label>
                  <div className="form-select">
                    <select
                      name="candidate1.gender"
                      id="candidate1.gender"
                      value={values.candidate1.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose your sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span className="select-icon">
                      <i className="zGG2022 Individual Registrationmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-white">
                  Second Participant Details
                </legend>

                <div className="form-group">
                  <label htmlFor="surname">Surname :</label>
                  <input
                    type="text"
                    name="candidate2.surname"
                    onChange={handleChange}
                    placeholder="enter your surname"
                    value={values.candidate2.surname}
                    id="surname"
                    className="w-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="other_name">Other Names :</label>
                  <input
                    type="text"
                    name="candidate2.othersName"
                    onChange={handleChange}
                    placeholder="enter your other names"
                    id="candidate2.othersName"
                    value={values.candidate2.othersName}
                    className="w-100"
                    required
                  />
                </div>

                {/* <div className="form-row"> */}
                <div className="form-group">
                  <label htmlFor="state">className :</label>
                  <div className="form-select">
                    <select
                      name="candidate2.class"
                      id="candidate2.class"
                      value={values.candidate2.class}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your Class</option>
                      <option value="ss1">SSS 1</option>
                      <option value="ss2">SSS 2</option>
                      <option value="ss3">SSS 3</option>
                    </select>
                    <span className="select-icon">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
                {/* </div> */}

                <div className="form-group">
                  <label htmlFor="email">Email Address :</label>
                  <input
                    className="w-100"
                    type="candidate2.email"
                    name="candidate2.email"
                    onChange={handleChange}
                    value={values.candidate2.email}
                    placeholder="enter your email address"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">Phone Number :</label>
                  <input
                    className="w-100"
                    type="candidate2.phoneNo"
                    name="candidate2.phoneNo"
                    value={values.candidate2.phoneNo}
                    onChange={handleChange}
                    placeholder="enter your phone number"
                    id="phoneNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender :</label>
                  <div className="form-select">
                    <select
                      name="candidate2.gender"
                      id="candidate2.gender"
                      value={values.candidate2.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose your sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span className="select-icon">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
              </fieldset>
              <div className="form-submit">
                <button
                  type="submit"
                  className="submit w-100"
                  name="submit"
                  id="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolRegisterPage
