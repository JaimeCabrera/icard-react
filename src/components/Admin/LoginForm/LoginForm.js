import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";

export const LoginForm = () => {
  return (
    <>
      <Form className="login-form-admin">
        <Form.Input
          name="email"
          type="email"
          placeholder="Correo Electrónico"
        />
        <Form.Input name="password" type="password" placeholder="Contraseña" />
        <Button type="submit" content="Iniciar sesión" primary fluid />
      </Form>
    </>
  );
};
