import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";
import { loginApi } from "../../../api/user";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";

const initialValues = {
  email: "admin@admin.com",
  password: "admin",
};

export const LoginForm = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValues) => {
      try {
        const response = await loginApi(formValues);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <>
      <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="email"
          placeholder="Correo Electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          autoComplete="off"
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" content="Iniciar sesión" primary fluid />
      </Form>
    </>
  );
};

const validationSchema = () => {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
};
