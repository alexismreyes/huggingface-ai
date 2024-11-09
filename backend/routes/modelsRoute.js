const express = require('express');
const router = express.Router();
const image2text = require('../models/image2text');
const translate = require('../models/translate');
const textGeneration = require('../models/textGeneration');

//text2image
router.post('/image2text', async (req, res) => {
  const urlImage = req.body.urlImage;

  try {
    // Proceed with processing the image URL
    const response = await image2text(urlImage);
    res.json(response);
  } catch (err) {
    // For other errors, return a general server error
    console.error('Error in image2text processing:', err);
    res.status(500).json({ error: 'Failure in the endpoint!' });
  }
});

//translate
router.post('/translate', async (req, res) => {
  const text2Translate = req.body.text2Translate;

  try {
    const response = await translate(text2Translate);
    res.json(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

//textGeneration
router.post('/textgeneration', async (req, res) => {
  const sourceText = req.body.sourceText;

  try {
    const response = await textGeneration(sourceText);
    res.json(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

// Export the router
module.exports = router;
