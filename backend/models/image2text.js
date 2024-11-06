const hf = require('../server');

const image2textModel = 'Salesforce/blip-image-captioning-large';

/* const prompt =
  'https://digitek.cl/cdn/shop/articles/iphone_16.webp?v=1707157138&width=1600'; */

const image2text = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
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
