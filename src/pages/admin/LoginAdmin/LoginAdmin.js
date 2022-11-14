import { LoginForm } from "../../../components/Admin";
import "./LoginAdmin.scss";

export const LoginAdmin = () => {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h1>Ingresar al panel</h1>
        <LoginForm />
      </div>
    </div>
  );
};
