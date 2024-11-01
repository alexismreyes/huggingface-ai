const express = require('express');
const dotenv = require('dotenv');
//hugginsface configuration
const { HfInference } = require('@huggingface/inference');

//enviroment
dotenv.config({ path: '.env.development' });
const hfkey = process.env.HF_KEY;
const port = process.env.PORT;

//Implementations
const app = express();
const hf = new HfInference(hfkey);
const image2textModel = 'Salesforce/blip-image-captioning-large';
const translationModel = 'Helsinki-NLP/opus-mt-es-en';

//To convert
const imageURL =
  'https://static.wikia.nocookie.net/marvels-avengers4475/images/6/63/N7UmKNPcZKKZNb8J1PxPWgsa~2.jpg/revision/latest/scale-to-width-down/1200?cb=20220903204205';
const textToTranslate = 'Me siento cansado, necesito descansar más';

//LLM IMPLEMENTATIONS
//Image-2-text
const processImage = async () => {
  try {
    const response = await fetch(imageURL);
    const blob = await response.blob();

    const result = await hf.imageToText({
      data: blob,
      model: image2textModel,
    });
    return result;
  } catch (err) {
    console.log('Error retrieving data from hugginface->', err);
    return { error: 'Failed to process image!!!' };
  }
};

//translations
const translate = async () => {
  const tranlasted = await hf.translation({
    model: translationModel,
    inputs: textToTranslate,
    parameters: {
      src_lang: 'spa',
      tgt_lang: 'eng',
    },
  });

  return tranlasted;
};

//ROUTES
//text2image
app.use('/image2text', async (req, res) => {
  try {
    const response = await processImage();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

//translation
app.use('/translate', async (req, res) => {
  try {
    const response = await translate();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

app.listen(port, () => {
  console.log(`Express server running in port -> ${port}`);
});
