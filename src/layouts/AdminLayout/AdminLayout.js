import React from "react";
import { TopMenu } from "../../components/Admin/TopMenu";
import { useAuth } from "../../hooks";
import { LoginAdmin } from "../../pages/admin";
import "./AdminLayout.scss";

export const AdminLayout = (props) => {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
      </div>
      <div className="admin-layout__main-content">{children}</div>
    </div>
  );
};
