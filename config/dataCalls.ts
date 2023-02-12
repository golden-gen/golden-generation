import { backendUrl } from "./__urls";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: backendUrl,
});
