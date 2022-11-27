import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage } from "../../components/Admin/HeaderPage/HeaderPage";
import { UserForm } from "../../components/Admin/UserForm.js/UserForm";
import { UsersTable } from "../../components/Admin/Users";
import { ModalBasic } from "../../components/Common/ModalBasic";
import { useAuth, useUser } from "../../hooks";
import { LoginAdmin } from "./LoginAdmin/LoginAdmin";

export const UserAdmin = () => {
  const { auth } = useAuth();
  const [titleModal, setTitleModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);
  const { get_all_users, loading, error, users } = useUser();
  useEffect(() => {
    get_all_users();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!auth) return <LoginAdmin />;

  const open_close_modal = () => {
    setShowModal(!showModal);
  };

  const add_new_user = () => {
    setTitleModal("Nuevo Usuario");
    setContent(<UserForm />);
    open_close_modal();
  };
  return (
    <div>
      <HeaderPage
        title="Usuarios"
        btnAddUser="Agregar usuario"
        btnAddUserClick={add_new_user}
      />
      {loading === true ? (
        <Loader active inline="centered">
          Cargando..
        </Loader>
      ) : (
        <UsersTable users={users} />
      )}
      <ModalBasic
        show={showModal}
        onClose={open_close_modal}
        size="small"
        title={titleModal}
        children={content}
      />
    </div>
  );
};
