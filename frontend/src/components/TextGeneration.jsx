const TextGeneration = () => {
  return (
    <>
      <div className="wrap-input100 validate-input m-b-23 ">
        <span className="login100-form-title p-b-20">
          Text Generation (GPT)
        </span>
        <textarea
          placeholder="Add your question in english"
          className="textarea100"
          rows="10"
        />
        <span className="focus-input100" />
      </div>
      <br />
      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          <div className="login100-form-bgbtn"></div>
          <button className="login100-form-btn">Send</button>
        </div>
      </div>
    </>
  );
};

export default TextGeneration;