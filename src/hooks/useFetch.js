import { useEffect, useState } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        console.log(res.data.data); 
        setData(res.data.data);
        setError(false); 
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
