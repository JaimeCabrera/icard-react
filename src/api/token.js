import { TOKEN } from "../utils/constants";

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};
