import axios from 'axios';
import { useState } from 'react';

const useApiRequest = (urlApi, requestData) => {
  const [responseData, setResponseData] = useState(null);

  const makeRequest = async () => {
    try {
      const response = await axios.post(urlApi, requestData);
      setResponseData(response.data);
      return response.data;
    } catch (err) {
      console.error('Fetch error in hook->', err);
    }
  };

  return { responseData, makeRequest };
};

export default useApiRequest;
