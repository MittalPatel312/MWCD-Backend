import { http } from "./http";

export const getRecommendations = async (consultantId) => {
  const res = await http.get(`/api/recommendations/${consultantId}`);
  return res.data;
};
