import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import "./userform.scss";
export const UserForm = () => {
  const [isActive, setIsActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: true,
    onSubmit: (formValue) => {
      alert("Hola");
      console.log("click aca");
      console.log(formValue);
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
          toggle="true"
          checked={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
          content="Activo"
          label="Usuario Activo"
        />
        <Form.Checkbox
          name="is_staff"
          toggle
          checked={isAdmin}
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
          content="Activo"
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
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
    password: Yup.string().required(true),
  };
};
