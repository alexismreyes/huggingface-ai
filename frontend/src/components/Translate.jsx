import axios from 'axios';
import { useState } from 'react';

const Translate = () => {
  const [translate, setTranslate] = useState('');
  const [translated, setTranslated] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e, text2Translate) => {
    e.preventDefault();
    console.log('Translation started!');
    setLoading(true);
    setTranslated(''); //clean the previous translated text
    setError(''); //delete error message when new translation is requested

    try {
      // Check if text2Translate is not empty
      if (!text2Translate) {
        throw new Error('Introduce text in Spanish to be translated');
      }

      //if text is valid to traduce
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/translate`,
        {
          text2Translate /* USING POST REQUEST SENDING BODY */,
        }
      );
      //console.log('Traduccion->', response.data);

      setTranslated(response.data.translation_text);
      setLoading(false);
      //console.log('Response data:', response.data.generated_text);
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError(err.message);
      setLoading(false);
      setTranslated('');
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
            onClick={(e) => handleTranslate(e, translate)}
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
      {translated != '' && (
        <div className="response">
          <span> {translated}</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default Translate;
