import { useState } from 'react';
import useApiRequest from '../hooks/useApiRequest';

const TextGeneration = () => {
  const [sourceText, setSourceText] = useState('');
  const { loading, data, error, makeRequest } = useApiRequest(
    `${import.meta.env.VITE_API_URL}/textgeneration`,
    { sourceText },
    'Empty question or server error',
    'TextGeneration'
  );

  const handleTextGeneration = async (e) => {
    e.preventDefault();
    console.log('Generation Started!');

    try {
      await makeRequest();
    } catch (err) {
      console.error('Fetch error:', err.message);
    }
  };

  return (
    <>
      <div className="wrap-input100 validate-input m-b-23 ">
        <span className="login100-form-title p-b-20">
          Text Generation (LLM)
        </span>
        <span style={{ color: 'green', fontWeight: 'bold' }}>
          <center> Mixtral model similar to Chat-GPT</center>
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
      {data != '' && (
        <div className="response">
          <span> {data}</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default TextGeneration;
