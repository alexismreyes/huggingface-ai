const { HfInference } = require('@huggingface/inference');

const hf = new HfInference('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');

//descargar imagen a memoria como un blob
//const imageURL =  'https://toppng.com/uploads/preview/super-saiyan-god-is-a-lazy-palette-swap-just-like-super-dragon-ball-z-goku-super-saiyan-blue-11562889915dcdyquvmgy.png';
const imageURL =
  'https://w7.pngwing.com/pngs/704/673/png-transparent-openai-chatgpt-logo.png';

//model from hugging faces
const model = 'Salesforce/blip-image-captioning-large';

const processImage = async () => {
  const response = await fetch(imageURL);
  const blob = await response.blob();

  const result = await hf.imageToText({
    data: blob,
    model: model,
  });

  return result;
};

//using .then because of the async nature of the function
processImage()
  .then((text) => {
    console.log(text);
  })
  .catch((e) => console.log(e));
