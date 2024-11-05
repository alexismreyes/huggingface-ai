import ImageToText from './components/ImageToText';
import TextGeneration from './components/TextGeneration';
import Translate from './components/Translate';

const Models = () => {
  return (
    <>
      <div
        className="container-login100"
        style={{ backgroundImage: 'url(../assets/img/bg-01.jpg)' }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65">
          <form className="login100-form">
            <ImageToText />
            <Translate />
            <TextGeneration />
          </form>
        </div>
      </div>
    </>
  );
};

export default Models;
