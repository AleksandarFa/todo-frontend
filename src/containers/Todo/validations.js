import * as Yup from "yup";

const todoSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required.")
    .min(2, "Title is too short. Should be minimum 2 chars long."),
});

export default todoSchema;
