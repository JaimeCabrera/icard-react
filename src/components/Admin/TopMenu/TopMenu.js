import { Icon, Menu } from "semantic-ui-react";
import "./TopMenu.scss";
import { useAuth } from "../../../hooks/useAuth";

export const TopMenu = () => {
  const { auth, logout } = useAuth();
  console.log(auth);

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <p>iCardAdmin</p>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Hola {auth.me.username}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
