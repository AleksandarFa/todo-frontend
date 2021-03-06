import React from "react";
import { registerUser } from "../../store/auth/actions";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import registerSchema from "./validations";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [t, i18n] = useTranslation("translation");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <div className="container w-50 border p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <label htmlFor="firstName">{t("register.firstName")}</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            ></input>
            {formik.errors.firstName ? (
              <small className="form-text text-muted">
                {formik.errors.firstName}
              </small>
            ) : null}
          </div>
          <div className="col">
            <label htmlFor="lastName">{t("register.lastName")}</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            ></input>
            {formik.errors.lastName ? (
              <small className="form-text text-muted">
                {formik.errors.lastName}
              </small>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">{t("login.username")}</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          ></input>
          {formik.errors.username ? (
            <small className="form-text text-muted">
              {formik.errors.username}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("register.email")}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.errors.email ? (
            <small className="form-text text-muted">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">{t("login.password")}</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.errors.password ? (
            <small className="form-text text-muted">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password2">{t("register.confirmPassword")}</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          ></input>
          {formik.errors.confirmPassword ? (
            <small className="form-text text-muted">
              {formik.errors.confirmPassword}
            </small>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
