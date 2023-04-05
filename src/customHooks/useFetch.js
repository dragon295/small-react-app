import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (params) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const { data } = await axios(url);

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(params);
  }, [params]);

  return { loading, data };
};

export default useFetch;
