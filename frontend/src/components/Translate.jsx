const Translate = () => {
  return (
    <>
      <div className="wrap-input100 validate-input m-b-23">
        <span className="login100-form-title p-b-20">Translate</span>
        <input
          type="text"
          placeholder="Add text in Spanish"
          className="input100"
        />
        <span className="focus-input100" />
      </div>
      <br />
      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          <div className="login100-form-bgbtn"></div>
          <button className="login100-form-btn">Translate</button>
        </div>
      </div>
    </>
  );
};

export default Translate;
