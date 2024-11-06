const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
//hugginsface configuration
const { HfInference } = require('@huggingface/inference');

//enviroment
dotenv.config({ path: '.env.development' });
const hfkey = process.env.HF_KEY;
const port = process.env.PORT;

//Implementations
const app = express();
app.use(cors()); //allow all origins for testing

app.use(express.json()); // Middleware to parse JSON request bodies - MUST USE IT to parse the body from frontend to backend

const hf = new HfInference(hfkey);

// Export hf so it can be used in other files
module.exports = hf;

//ROUTES
/* app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
}); */

const router = require('./routes/modelsRoute');
app.use('/api', router);

app.listen(port, () => {
  console.log(`Express server running in port -> ${port}`);
});
