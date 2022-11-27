import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import "./tableusers.scss";
export const UsersTable = (props) => {
  const { users } = props;
  console.log(users);
  if (users) {
    return (
      <Table className="table-users-admin" selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Nombres</Table.HeaderCell>
            <Table.HeaderCell>Apellidos</Table.HeaderCell>
            <Table.HeaderCell>Activo</Table.HeaderCell>
            <Table.HeaderCell>Staff</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.first_name}</Table.Cell>
                <Table.Cell>{user.last_name}</Table.Cell>
                <Table.Cell className="status">
                  {user.is_active ? (
                    <Icon name="check" color="green" />
                  ) : (
                    <Icon name="close" color="red" />
                  )}
                </Table.Cell>
                <Table.Cell className="status">
                  {user.is_staff ? (
                    <Icon name="check" color="green" />
                  ) : (
                    <Icon name="close" />
                  )}
                </Table.Cell>
                <Actions user={user} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
};

const Actions = ({ user }) => {
  return (
    <Table.Cell textAlign="right">
      <Button
        size="mini"
        icon
        color="blue"
        onClick={() => {
          console.log(user);
        }}
      >
        <Icon name="pencil" />
      </Button>
      <Button
        size="mini"
        icon
        color="grey"
        onClick={() => {
          console.log(user);
        }}
      >
        <Icon name="trash alternate" />
      </Button>
    </Table.Cell>
  );
};
