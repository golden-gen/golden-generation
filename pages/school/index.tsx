/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useFormik } from "formik";
import React from "react";

interface initialValuesType {
  surname: string;
  othersName: string;
  class: string;
  email: string;
  gender: string;
  phoneNo: string;
  school: string;
}
const SchoolRegisterPage = () => {
  const initialValues: initialValuesType = {
    surname: "",
    othersName: "",
    class: "",
    email: "",
    gender: "",
    phoneNo: "",
    school: "",
  };

  const register = (values) => {
    axios
      .post(
        `https://registration-api-xc9m.onrender.com/api/v1/reg/student`,
        values
      )
      .then((res) => {
        console.log({ res });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: register,
  });
  console.log({ values });
  return (
    // <div className="main">
    //   <div className="container ">
    //     <div className="signup-content">
    //       <div className="signup-img">
    //         <img src="/images/signup-img.jpg" alt="" />
    //       </div>
    //       <div className="signup-form">
    //         <form
    //           onSubmit={handleSubmit}
    //           className="register-form"
    //           id="register-form"
    //         >
    //           <h2>Individual Registration Page For GG2022</h2>
    //           {/* <div className="form-row"> */}
    //           <div className="form-group">
    //             <label htmlhtmlFor="surname">Surname :</label>
    //             <input
    //               className="w-100"
    //               type="text"
    //               name="surname"
    //               id="surname"
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="other_name">Other Names :</label>
    //             <input
    //               type="text"
    //               name="othersName"
    //               id="other_name"
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>
    //           {/* </div> */}
    //           <div className="form-group">
    //             <label htmlFor="phone">Phone Number :</label>
    //             <input
    //               type="text"
    //               name="phoneNo"
    //               id="phone"
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="email">Email Address :</label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               placeholder="yourmail@gmail.com"
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="school">School :</label>
    //             <input
    //               type="text"
    //               name="school"
    //               id="school"
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="address">Address :</label>
    //             <input
    //               type="text"
    //               name="address"
    //               id="address"
    //               required
    //               onChange={handleChange}
    //             />
    //           </div>
    //           {/* <div class="form-radio">
    //                         <label for="gender" class="radio-label">Gender :</label>
    //                         <div class="form-radio-item">
    //                             <input type="radio" name="gender" id="male" value="male" />
    //                             <label for="male">Male</label>
    //                             <span class="check"></span>
    //                         </div>
    //                         <div class="form-radio-item">
    //                             <input type="radio" name="gender" id="female" value="female" />
    //                             <label for="female">Female</label>
    //                             <span class="check"></span>
    //                         </div>
    //                     </div> */}
    //           {/* <div className="form-row d-flex"> */}
    //           <div className="form-group">
    //             <label htmlFor="gender">Gender :</label>
    //             <div className="form-select">
    //               <select
    //                 name="gender"
    //                 id="gender"
    //                 onChange={handleChange}
    //                 required
    //               >
    //                 <option>Select your gender</option>
    //                 <option value="male">Male</option>
    //                 <option value="female">Female</option>
    //               </select>
    //               <span className="select-icon">
    //                 <i className="zmdi zmdi-chevron-down" />
    //               </span>
    //             </div>
    //           </div>
    //           {/* </div> */}
    //           {/* <div className="form-row"> */}
    //           <div className="form-group">
    //             <label htmlFor="class">Class :</label>
    //             <div className="form-select">
    //               <select
    //                 name="class"
    //                 id="class"
    //                 onChange={handleChange}
    //                 required
    //               >
    //                 <option>Select your class</option>
    //                 <option value="ss1">SSS 1</option>
    //                 <option value="ss2">SSS 2</option>
    //                 <option value="ss3">SSS 3</option>
    //               </select>
    //               <span className="select-icon">
    //                 <i className="zmdi zmdi-chevron-down" />
    //               </span>
    //             </div>
    //           </div>
    //           {/* </div> */}
    //           <div className="form-submit">
    //             <button
    //               type="submit"
    //               className="submit"
    //               name="submit"
    //               id="submit"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //           <div
    //             className="modal fade"
    //             id="exampleModalToggle2"
    //             aria-hidden="true"
    //             aria-labelledby="exampleModalToggleLabel2"
    //             tabIndex={-1}
    //           >
    //             <div className="modal-dialog modal-dialog-centered">
    //               <div className="modal-content">
    //                 <div className="modal-header">
    //                   <h1
    //                     className="modal-title fs-5"
    //                     id="exampleModalToggleLabel2"
    //                   >
    //                     Modal 2
    //                   </h1>
    //                   <button
    //                     type="button"
    //                     className="btn-close"
    //                     data-bs-dismiss="modal"
    //                     aria-label="Close"
    //                   />
    //                 </div>
    //                 <div className="modal-body">
    //                   Hide this modal and show the first with the button below.
    //                 </div>
    //                 <div className="modal-footer">
    //                   <button
    //                     className="btn btn-primary"
    //                     data-bs-target="#exampleModalToggle"
    //                     data-bs-toggle="modal"
    //                   >
    //                     Back to first
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="main bg-form">
      <div className="container">
        <div className="signup-content">
          {/* <div className="signup-img">
            <img src="images/signup-img.jpg" alt="" />
          </div> */}
          <div className="signup-form form">
            <form method="POST" className="register-form" id="register-form">
              <h2 className="text-center text-white">
                School Registration Page For GG2022
              </h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="school">School Name :</label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    className="w-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">School Address :</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="w-100"
                    required
                  />
                </div>
              </div>
              <fieldset>
                <legend>First Participant Details</legend>

                <div className="form-group">
                  <label htmlFor="surname">Surname :</label>
                  <input
                    type="text"
                    className="w-100"
                    name="surname"
                    id="surname"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="other_name">Other Names :</label>
                  <input
                    className="w-100"
                    type="text"
                    name="other_name"
                    id="other_name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="className">className :</label>
                    <div className="form-select">
                      <select name="className" id="className" required>
                        <option value="" disabled selected>
                          Select your className
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
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address :</label>
                  <input
                    className="w-100"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yourmail@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender :</label>
                  <div className="form-select">
                    <select name="gender" id="gender" required>
                      <option value="" disabled selected>
                        Choose your sex
                      </option>
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
                <legend>Second Participant Details</legend>

                <div className="form-group">
                  <label htmlFor="surname">Surname :</label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    className="w-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="other_name">Other Names :</label>
                  <input
                    type="text"
                    name="other_name"
                    id="other_name"
                    className="w-100"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="state">className :</label>
                    <div className="form-select">
                      <select name="state" id="state" required>
                        <option value="" disabled selected>
                          Select your className
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
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address :</label>
                  <input
                    className="w-100"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yourmail@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender :</label>
                  <div className="form-select">
                    <select name="gender" id="gender" required>
                      <option value="" disabled selected>
                        Choose your sex
                      </option>
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
                <input
                  className="submit w-100"
                  type="submit"
                  value="Submit Form"
                  name="submit"
                  id="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolRegisterPage;
