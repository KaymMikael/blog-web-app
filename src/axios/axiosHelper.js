import axios from "axios";

const axiosHelper = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default axiosHelper;
