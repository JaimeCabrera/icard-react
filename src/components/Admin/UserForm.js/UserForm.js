import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useUser } from "../../../hooks";
import "./userform.scss";
export const UserForm = () => {
  const [isActive, setIsActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { add_new_user } = useUser();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await add_new_user(formValues);
        console.log("enviando", formValues);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className="user-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="username"
        type="text"
        placeholder="Usuario"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <Form.Input
        name="email"
        type="email"
        placeholder="Correo Electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="first_name"
        placeholder="Nombres"
        type="text"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      />
      <Form.Input
        name="last_name"
        placeholder="Apellidos"
        type="text"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input
        name="password"
        autoComplete="off"
        placeholder="Contraseña"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className="user-form__active">
        <Form.Checkbox
          name="is_active"
          id="is_active"
          toggle
          checked={isActive}
          value={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
          label="Usuario Activo"
          onChange={formik.handleChange}
        />
        <Form.Checkbox
          id="is_staff"
          toggle
          checked={isAdmin}
          value={isAdmin}
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
          onChange={formik.handleChange}
          label="Usuario Administrador"
        />
      </div>
      <Button primary type="submit" content="Crear" fluid />
    </Form>
  );
};

const initialValues = () => {
  return {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    is_active: "",
    is_staff: "",
    password: "",
  };
};

const newSchema = () => {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    is_active: Yup.bool(),
    is_staff: Yup.bool(),
    password: Yup.string().required(true),
  };
};
