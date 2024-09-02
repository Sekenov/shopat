import { useEffect, useState } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Изначально загрузка идет

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        console.log(res.data.data); // Убедитесь, что структура данных соответствует вашим ожиданиям
        setData(res.data.data);
        setError(false); // Сброс ошибки, если запрос успешный
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false); // Устанавливаем загрузку как завершенную независимо от успеха или ошибки
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
