import { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';

const Translate = () => {
  const [translate, setTranslate] = useState('');
  const [displayData, setDisplayData] = useState('');

  const [error, setError] = useState(null);
  const { loading, makeRequest } = useApiRequest(
    `${import.meta.env.VITE_API_URL}/translate`,
    { translate }
  );

  const handleTranslate = async (e) => {
    e.preventDefault();
    console.log('Translation started!');

    setError('');
    setDisplayData('');

    try {
      // Check if text2Translate is not empty
      if (!translate) {
        throw new Error('Introduce text in Spanish to be translated');
      }

      const data = await makeRequest();
      if (data) {
        setDisplayData(data.translation_text);
      }
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="wrap-input100 validate-input m-b-23">
        <span className="login100-form-title p-b-20">Translate</span>
        <input
          type="text"
          placeholder="Add text in Spanish"
          className="input100"
          onChange={(e) => {
            setTranslate(e.target.value);
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
            onClick={(e) => handleTranslate(e)}
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
      {displayData != '' && (
        <div className="response">
          <span> {displayData}</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default Translate;
