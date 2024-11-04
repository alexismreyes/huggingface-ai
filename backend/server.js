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

// Export hf so it can be used in other files
module.exports = hf;

//ROUTES
const router = require('./routes/modelsRoute');
app.use('/api', router);

app.listen(port, () => {
  console.log(`Express server running in port -> ${port}`);
});
