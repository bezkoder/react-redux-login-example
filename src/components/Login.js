import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Icon from "@ant-design/icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import logoMarkIcon from "../icons/logo-mark-icon";
import MyHopeHead from "../icons/myHopeHead";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (val) => {
    let errors = {};
    if (!val.email) {
      errors.email = "Email is required!";
    }
    if (!val.password) {
      errors.password = "Password is required!";
    }
    console.log(val, "val");

    return errors;
  };

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        // window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="login-container">
      <div className="top-logo">
        <Icon component={MyHopeHead} />
      </div>
      <div className="col-md-12 login-form">
        <div className="card-container">
          <Formik
            validate={validate}
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="card">
                <img
                  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  alt="profile-img"
                  className="profile-img-card"
                />
                <div className="form-group">
                  {/* <label htmlFor="email">Email</label> */}
                  <Field
                    placeHolder="Enter name"
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
                <div className="forgot-password">
                  If you forgot password ...
                </div>
              </div>

              <div className="form-group bottom-login-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          {message && (
            <div className="alert alert-danger customize-danger" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-logo">
        <Icon component={logoMarkIcon} />
      </div>
    </div>
  );
};

export default Login;
