import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "./sidemenu.scss";
export const SideMenu = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
};

const MenuLeft = (props) => {
  const { auth } = useAuth();
  const { pathname } = props;
  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to="/admin" active={pathname === "/admin"}>
        <Icon name="home">Pedidos</Icon>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/admin/tables"
        active={pathname === "/admin/tables"}
      >
        <Icon name="table">Mesas</Icon>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={"/admin/payments-history"}
        active={pathname === "/admin/payments-history"}
      >
        <Icon name="history">Historial de pagos</Icon>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={"/admin/categories"}
        active={pathname === "/admin/categories"}
      >
        <Icon name="folder">Categorias</Icon>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={"/admin/products"}
        active={pathname === "/admin/products"}
      >
        <Icon name="cart">Productos</Icon>
      </Menu.Item>
      {auth.me?.is_staff && (
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users "}
        >
          <Icon name="folder">Usuarios</Icon>
        </Menu.Item>
      )}
    </Menu>
  );
};
