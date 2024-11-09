import axios from 'axios';
import { useState } from 'react';

const useApiRequest = (urlApi, requestData) => {
  const [loading, setLoading] = useState(false);

  const makeRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post(urlApi, requestData);

      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);

      console.error('Fetch error in hook->', err);
    }
  };

  return { loading, makeRequest };
};

export default useApiRequest;
