import { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';

const Translate = () => {
  const [translate, setTranslate] = useState('');
  const { loading, data, error, makeRequest } = useApiRequest(
    `${import.meta.env.VITE_API_URL}/translate`,
    { translate },
    'Text empty or server error',
    'Translate'
  );

  const handleTranslate = async (e) => {
    e.preventDefault();
    console.log('Translation started!');

    try {
      await makeRequest();
    } catch (err) {
      console.error('Fetch error:', err.message);
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
      {data && data.translation_text != '' && (
        <div className="response">
          <span> {data.translation_text}</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default Translate;
