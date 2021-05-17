const formik = useFormik({
  initialValues: {
    title: "",
    description: "",
    priority_choices: "LOW",
    completed: false,
  },
  validationSchema: todoSchema,
  onSubmit: (values) => {
    values["user"] = user.id;
    dispatch(createTodo(values));
  },
});

export default formik;
