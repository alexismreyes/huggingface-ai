import axios from 'axios';
import { useState } from 'react';

const ImageToText = () => {
  const [urlImage, setUrlImage] = useState('');
  const [textImage, setTextImage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage2Text = async (e, imageUrl) => {
    e.preventDefault();
    console.log('Image To Text executed!');
    setLoading(true);
    setError('');
    try {
      // First, validate that the URL is properly formed
      new URL(imageUrl);
      // Try to fetch the image (check if it's a valid image URL)
      const checkedImageUrl = await fetch(imageUrl, { method: 'HEAD' });
      // Check if the response is valid and if it returns an image
      if (
        !checkedImageUrl.ok ||
        !checkedImageUrl.headers.get('content-type').includes('image')
      ) {
        throw new Error('Invalid or unreachable image URL.');
      }

      //if url image is valid
      const response = await axios.post(
        `http://localhost:5050/api/image2text`,
        {
          imageUrl /* USING POST REQUEST SENDING BODY */,
        }
      );

      setTextImage(response.data.generated_text);
      setLoading(false);

      //console.log('Response data:', response.data.generated_text);
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Invalid URL format or server error');
      setLoading(false);
      setTextImage('');
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
            onClick={(e) => handleImage2Text(e, urlImage)}
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
      {textImage != '' && (
        <div className="response">
          <span>
            {' '}
            <b>Image is about: </b> {textImage}
          </span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default ImageToText;
