import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const submitSurvey = async (customerId, answers) => {
  return axios.post(`${API_URL}/surveys/submit`, { customerId, answers });
};

export const getSurveys = async () => {
  return axios.get(`${API_URL}/surveys`);
};
