import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/auth";
import { CountryDropdown } from "react-country-region-selector";
import { clearMessage } from "../slices/message";
import Icon from "@ant-design/icons";
import MyHopeHead from "../icons/myHopeHead";
import logoMarkIcon from "../icons/logo-mark-icon";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const countryRef = useRef();
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.message);
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // const validationSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .test(
  //       "len",
  //       "The username must be between 3 and 20 characters.",
  //       (val) =>
  //         val &&
  //         val.toString().length >= 3 &&
  //         val.toString().length <= 20
  //     )
  //     .required("This field is required!"),
  //   email: Yup.string()
  //     .email("This is not a valid email.")
  //     .required("This field is required!"),
  //   password: Yup.string()
  //     .test(
  //       "len",
  //       "The password must be between 6 and 40 characters.",
  //       (val) =>
  //         val &&
  //         val.toString().length >= 6 &&
  //         val.toString().length <= 40
  //     )
  //     .required("This field is required!"),
  // });

  const handleRegister = (formValue) => {
    const { email, password, dateOfBirth, firstName, lastName } = formValue;
    setLoading(true);

    setSuccessful(false);

    dispatch(register({ email, password, dateOfBirth, firstName, lastName }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  console.log(selectedCountry, "selected");
  return (
    <div className="login-container">
      <div className="top-logo">
        <Icon component={MyHopeHead} />
      </div>
      <div className="col-md-12 login-form">
        <div className="card-container">
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form>
              <div className="card-register">
                {/* <img
                  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  alt="profile-img"
                  className="profile-img-card-register"
                /> */}
                <div>
                  <div className="remove-padding form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <Field
                      name="firstName"
                      placeHolder="Enter first name"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <Field
                      name="middleName"
                      placeHolder="Enter middle name"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="middleName"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <Field
                      name="lastName"
                      placeHolder="Enter last name"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                </div>
                <div className="form-group">
                  {/* <label htmlFor="email">Email</label> */}
                  <Field
                    placeHolder="Enter email"
                    name="email"
                    type="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="email">Email</label> */}
                  <Field
                    placeHolder="Enter phone number"
                    name="phoneNumber"
                    type="number"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                {/* <div className='country-select' ref={countryRef}>
                <CountryDropdown
	                  value={selectedCountry}
	                  onChange={(e) => setSelectedCountry(e)} />
                </div> */}
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <Field
                    name="password"
                    type="password"
                    placeHolder="Enter password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <Field
                    name="dateOfBirth"
                    type="text"
                    placeHolder="Enter date of birth"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
              </div>

              <div
                style={{ marginBottom: 0, marginTop: 0 }}
                className="form-group bottom-login-btn"
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Register</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          {message && (
            <div
              style={{ bottom: 0 }}
              className="alert alert-danger customize-danger"
              role="alert"
            >
              {message}
            </div>
          )}
        </div>
      </div>
      {/* <div className="bottom-logo">
        <Icon component={logoMarkIcon} />
      </div> */}
    </div>
  );
};

export default Register;
