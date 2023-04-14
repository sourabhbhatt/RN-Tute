import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchData = url => {
  console.log('url:::::', url);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const responseData = await response?.data;
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {loading, error, data};
};

export default useFetchData;
