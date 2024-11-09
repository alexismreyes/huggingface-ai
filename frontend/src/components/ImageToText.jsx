import { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';

const ImageToText = () => {
  const [urlImage, setUrlImage] = useState('');
  const [displayData, setDisplayData] = useState('');
  const [error, setError] = useState('');
  const { loading, makeRequest } = useApiRequest(
    `${import.meta.env.VITE_API_URL}/image2text`,
    { urlImage }
  );

  const handleImage2Text = async (e) => {
    e.preventDefault();
    console.log('Image To Text executed!');
    setError('');
    setDisplayData('');

    try {
      // First, validate that the URL is properly formed
      const validUrl = new URL(urlImage);

      // Try to fetch the image (check if it's a valid image URL)
      const checkedImageUrl = await fetch(validUrl, { method: 'HEAD' });
      // Check if the response is valid and if it returns an image
      if (
        !checkedImageUrl.ok ||
        !checkedImageUrl.headers.get('content-type').includes('image')
      ) {
        throw new Error('Invalid or unreachable image URL.');
      }
      //if its a valid image
      // Call makeRequest and set the response data to displayData
      // Call makeRequest and set the response data to displayData
      const data = await makeRequest();
      if (data) {
        setDisplayData(data.generated_text);
      }
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Invalid URL format or server error');
    }
  };

  return (
    <>
      <div className="wrap-input100 m-b-23">
        <span className="login100-form-title p-b-20">Image to Text</span>
        <input
          type="text"
          placeholder="Add Image URL"
          className="input100"
          onChange={(e) => {
            setUrlImage(e.target.value);
          }}
        />
        <span className="focus-input100" />
      </div>
      <br />
      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          <div className="login100-form-bgbtn"></div>
          <button
            className="login100-form-btn"
            onClick={(e) => handleImage2Text(e)}
          >
            Get value
          </button>
        </div>
      </div>
      {loading && (
        <div className="response">
          <span>Loading...</span>
        </div>
      )}
      {displayData && (
        <div className="response">
          <span>
            {' '}
            <b>Image is about: </b> {displayData}
          </span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default ImageToText;
