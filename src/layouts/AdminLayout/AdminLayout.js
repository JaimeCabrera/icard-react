import React from "react";
import { LoginAdmin } from "../../pages/admin";
import "./AdminLayout.scss";

export const AdminLayout = (props) => {
  const { children } = props;
  const auth = null;

  if (!auth) return <LoginAdmin />;

  return <div>{children}</div>;
};
