import React from "react";
import { Button } from "semantic-ui-react";
import "./header.scss";
export const HeaderPage = (props) => {
  const { title, btnAddUser, btnAddUserClick, btnClicDelete, btnDeleteUser } =
    props;
  return (
    <div className="header-page-admin">
      <h4>{title}</h4>
      <div>
        {btnAddUser && (
          <Button positive onClick={btnAddUserClick}>
            {btnAddUser}
          </Button>
        )}
        {btnDeleteUser && (
          <Button negative onClick={btnClicDelete}>
            {btnDeleteUser}
          </Button>
        )}
      </div>
    </div>
  );
};
