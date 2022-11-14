import { BASE_URL } from "../utils/constants";

export const loginApi = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/login`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    if (response.status !== 200) {
      throw new Error("Usuario o contraseña incorrectos");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getMyInfo = async (token) => {
  try {
    const url = `${BASE_URL}/api/auth/me`;
    const params = {
      headers: {
        Authorization: `Barer ${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};