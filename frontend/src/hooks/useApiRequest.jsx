import { useState } from 'react';
import axios from 'axios';

const useApiRequest = (urlApi, requestData, errorMessage, sourceComponent) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); //its used to keep track of data and re-render the main component, however the main data is beign returned
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    setLoading(true);
    setError(null); // Reset error on each new request
    setData(null); // Reset data for fresh request

    try {
      //If sourceComponent is not imageToText make this validation
      if (!requestData && sourceComponent != 'imageToText') {
        throw new Error();
      }

      //If sourceComponent IS imageToText make this validation
      if (sourceComponent === 'imageToText') {
        const validUrl = new URL(requestData.urlImage);
        const checkedImageUrl = await fetch(validUrl, { method: 'HEAD' });

        if (
          !checkedImageUrl.ok ||
          !checkedImageUrl.headers.get('content-type').includes('image')
        ) {
          throw new Error();
        }
      }

      const response = await axios.post(urlApi, requestData);
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error('Fetch error in hook:', err);
      setError(errorMessage);
      setLoading(false);
      return error;
    }
  };

  return { loading, data, error, makeRequest };
};

export default useApiRequest;
