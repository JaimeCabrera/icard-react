import React, { useEffect } from "react";
import { useUser } from "../../hooks";

export const UserAdmin = () => {
  const { get_all_users, loading, error, users } = useUser();
  useEffect(() => {
    get_all_users();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>User Admin page</h1>
    </div>
  );
};
