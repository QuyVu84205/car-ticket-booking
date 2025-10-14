import { api } from "./client";

const authApi = {
  login: (data) => api("/api/v1/auth/login", {
    method: "POST",
    body: data
  }),
  register: (data) => api("/api/v1/auth/register", {
    method: "POST",
    body: data
  }),
  me: () => api("/api/v1/auth/me"),
  logout: () => api("/api/v1/auth/logout", { method: "POST" }),
};

export default authApi;