import { useState } from "react";
import { getMyInfo, get_users_api } from "../api/user";
import { useAuth } from "./useAuth";

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const { auth } = useAuth();
  const get_user_auth = async (token) => {
    try {
      const response = await getMyInfo(token);
      return response;
    } catch (error) {
      throw error;
    }
  };
  const get_all_users = async () => {
    try {
      setLoading(true);
      const response = await get_users_api(auth.token);
      setLoading(false);
      setUsers(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    loading,
    users,
    error,
    get_user_auth,
    get_all_users,
  };
};
