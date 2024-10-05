import axios from "axios";

const axiosHelper = axios.create({
  baseURL: "http://localhost:3001",
});

export default axiosHelper;
