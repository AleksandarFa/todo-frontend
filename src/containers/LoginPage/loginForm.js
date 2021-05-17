import React from "react";
import { useFormik } from "formik";
import loginSchema from "./validations";
import { loginUser } from "../../store/auth/actions";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [t, i18n] = useTranslation("translation");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <div className="container w-50 border p-3">
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
