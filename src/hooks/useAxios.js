import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setData(response.data.reverse()); //reverse the result to display the recently blogs
      } catch (e) {}
    };
    fetchData(dataUrl);
  }, []);
  return { data };
};

export default useAxiosFetch;
