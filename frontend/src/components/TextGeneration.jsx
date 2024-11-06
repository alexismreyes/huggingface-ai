import axios from 'axios';
import { useState } from 'react';

const TextGeneration = () => {
  const [sourceText, setSourceText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextGeneration = async (e, sourceText) => {
    e.preventDefault();
    console.log('Generation Started!');
    setLoading(true);
    setGeneratedText(''); //clean the previous generated text
    setError(''); //delete error message when new translation is requested

    try {
      // Check if text2Translate is not empty
      if (!sourceText) {
        throw new Error('Introduce any text before starting text generation');
      }

      //if text is valid to traduce
      const response = await axios.post(
        `http://localhost:5050/api/textgeneration`,
        {
          sourceText /* USING POST REQUEST SENDING BODY */,
        }
      );
      //console.log('Generated->', response.data);

      setGeneratedText(response.data);
      setLoading(false);
      //console.log('Response data:', response.data.generated_text);
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError(err.message);
      setLoading(false);
      setGeneratedText('');
    }
  };

  return (
    <>
      <div className="wrap-input100 validate-input m-b-23 ">
        <span className="login100-form-title p-b-20">
          Text Generation (LLM)
        </span>
        <textarea
          placeholder="Add your question in english"
          className="textarea100"
          rows="10"
          onChange={(e) => {
            setSourceText(e.target.value);
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
            onClick={(e) => handleTextGeneration(e, sourceText)}
          >
            Send
          </button>
        </div>
      </div>
      {loading && (
        <div className="response">
          <span>Loading...</span>
        </div>
      )}
      {generatedText != '' && (
        <div className="response">
          <span> {generatedText}</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default TextGeneration;
