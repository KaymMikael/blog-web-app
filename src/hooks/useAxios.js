import { useState, useEffect, useContext } from "react";
import axiosHelper from "../axios/axiosHelper";
import UserContext from "../context/UserContext";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axiosHelper.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (isAuthenticated) {
      fetchData(dataUrl);
    }
  }, [isAuthenticated]);
  return { data };
};

export default useAxiosFetch;
