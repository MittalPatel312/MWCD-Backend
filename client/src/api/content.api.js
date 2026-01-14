import { http } from "./http";

export const searchContent = async (params) => {
  const res = await http.get("/api/content/search", { params });
  return res.data;
};

export const createContent = async (payload) => {
  const res = await http.post("/api/content", payload);
  return res.data;
};

export const getConsultantsApi = async () => {
  const res = await http.get("/api/consultants");
  return res.data;
};

export const getAuditsApi = async () => {
  const res = await http.get("/api/audits");
  return res.data;
};
