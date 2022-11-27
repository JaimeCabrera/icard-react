import { useAuth } from "../../hooks";
import { LoginAdmin } from "./LoginAdmin/LoginAdmin";

export const HomeAdmin = () => {
  const { auth } = useAuth();
  if (!auth) return <LoginAdmin />;
  return (
    <div>
      <h1>PAgina del administrador</h1>
    </div>
  );
};
