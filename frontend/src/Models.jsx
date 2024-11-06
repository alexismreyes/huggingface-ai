import ImageToText from './components/ImageToText';
import TextGeneration from './components/TextGeneration';
import Translate from './components/Translate';
import bgImage from '../assets/img/bg-01.jpg';

const Models = () => {
  return (
    <>
      <div
        className="container-login100"
        style={{ backgroundImage: `url(${bgImage})` }}
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
