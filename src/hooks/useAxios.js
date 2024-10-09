import { useState, useEffect } from "react";
import axiosHelper from "../axios/axiosHelper";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axiosHelper.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData(dataUrl);
  }, []);
  return { data };
};

export default useAxiosFetch;
