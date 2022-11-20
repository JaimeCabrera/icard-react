import { getMyInfo } from "../api/user";

export const useUser = () => {
  const get_user_auth = async (token) => {
    try {
      const response = await getMyInfo(token);
      return response;
    } catch (error) {
      throw error;
    }
  };
  return {
    get_user_auth,
  };
};
