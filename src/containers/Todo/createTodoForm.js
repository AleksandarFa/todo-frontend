import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import todoSchema from "./validations";
import { createTodo } from "../../store/todos/actions";
import { makeSelectUser } from "../../store/auth/selectors";
import { makeSelectSingleTodo } from "../../store/todos/selectors";
import { fetchAuthUser } from "../../store/auth/actions";
import { singleTodoRequest, updateTodo } from "../../store/todos/actions";
import { useParams } from "react-router-dom";

const TodoForm = ({ isEditing }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(makeSelectUser());
  const todo = useSelector(makeSelectSingleTodo());

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
      isEditing ? dispatch(updateTodo(values)) : dispatch(createTodo(values));
    },
  });

  useEffect(() => {
    dispatch(fetchAuthUser());
    isEditing ? dispatch(singleTodoRequest(id)) : null;
  }, []);

  useEffect(() => {
    formik.setValues(todo);
  }, [todo]);

  return (
    <div className="container w-50 border p-3">
      <div className="form-row">
        <form onSubmit={formik.handleSubmit}>
          <div className="col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title ? (
              <small className="form-text text-muted">
                {formik.errors.title}
              </small>
            ) : null}
          </div>
          <div className="col">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          <div className="col">
            <label htmlFor="priority_choices">Priority:</label>
            <select
              id="priority_choices"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.priority_choices}
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
          </div>
          <div className="col ml-3 mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="completed"
              onChange={formik.handleChange}
              value={formik.values.completed}
            />
            <label htmlFor="completed">Completed:</label>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
