import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required.")
    .min(4, "Username is too short. Should be at least 4 chars long."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short. Should be at least 8 chars long."),
});

export default loginSchema;
