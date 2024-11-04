const hf = require('../server');

const image2textModel = 'Salesforce/blip-image-captioning-large';
const imageURL =
  'https://static.wikia.nocookie.net/marvels-avengers4475/images/6/63/N7UmKNPcZKKZNb8J1PxPWgsa~2.jpg/revision/latest/scale-to-width-down/1200?cb=20220903204205';

const image2text = async () => {
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

module.exports = image2text;
