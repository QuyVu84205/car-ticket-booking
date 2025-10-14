const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8081";

export async function api(path, { method = "GET", body, headers } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...(headers || {}) },
    credentials: "include", // nếu backend dùng cookie
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, data };
  return data;
}
