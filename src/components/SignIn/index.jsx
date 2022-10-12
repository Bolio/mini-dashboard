import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { createTokenThunk } from "../../redux/modules/signin";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleSignIn = (formValue) => {
    console.log("formValue :", formValue);
    const { email, password } = formValue;
    // console.log("email, password  :", email, password);

    dispatch(createTokenThunk({ email, password }));
  };

  return (
    <main className="form-signin w-100 m-auto">
      <img
        className="mb-4"
        src="https://paycode.com.mx/assets/img/paycode/paycode.png"
        alt=""
        width="200"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignIn}
      >
        <Form>
          <div className="form-floating">
            <Field
              type="email"
              name="email"
              id="floatingInput"
              className="form-control"
              placeholder="name@example.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <Field
              type="password"
              name="password"
              id="floatingPassword"
              className="form-control"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button type="submit" className="w-100 btn btn-lg btn-primary">
            Sign in
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default SignIn;
