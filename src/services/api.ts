import axios from "axios";

export const api = axios.create({
  baseURL: "https://techshop-api-eight.vercel.app",
});