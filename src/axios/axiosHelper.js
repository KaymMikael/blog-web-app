import axios from "axios";

const axiosHelper = axios.create({
  baseURL: "https://blog-web-app-api.onrender.com",
});

export default axiosHelper;
