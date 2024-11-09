import { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';

const ImageToText = () => {
  const [urlImage, setUrlImage] = useState('');
  const { loading, data, error, makeRequest } = useApiRequest(
    `${import.meta.env.VITE_API_URL}/image2text`,
    { urlImage },
    'Bad URL or server error',
    'imageToText'
  );

  const handleImage2Text = async (e) => {
    e.preventDefault();
    try {
      await makeRequest();
    } catch (err) {
      console.error('Fetch error:', err.message);
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
          onChange={(e) => setUrlImage(e.target.value)}
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
            Translate
          </button>
        </div>
      </div>
      {loading && (
        <div className="response">
          <span>Loading...</span>
        </div>
      )}
      {data && (
        <div className="response">
          <span>
            <b>Image is about:</b> {data.generated_text}
          </span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default ImageToText;
