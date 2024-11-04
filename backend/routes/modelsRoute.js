const express = require('express');
const router = express.Router();
const image2text = require('../models/image2text');
const translate = require('../models/translate');
const textGeneration = require('../models/textGeneration');

//text2image
router.get('/image2text', async (req, res) => {
  try {
    const response = await image2text();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

//translate
router.get('/translate', async (req, res) => {
  try {
    const response = await translate();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

//textGeneration
router.get('/textgeneration', async (req, res) => {
  try {
    const response = await textGeneration();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: 'Failure in the endpoint!!' });
  }
});

// Export the router
module.exports = router;
