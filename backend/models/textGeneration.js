const hf = require('../server');

const textGenerationModel = 'mistralai/Mixtral-8x7B-Instruct-v0.1';
const textToGenerate = 'Whats the result of 2x2';

const textGeneration = async () => {
  let result = '';
  for await (const output of hf.textGenerationStream({
    model: textGenerationModel,
    inputs: textToGenerate,
    parameters: { max_new_tokens: 50 },
    temperature: 0.2, // Adjusted for more deterministic outputs
    stop: ['\n', '.', '!', '?', '...'], // Stops at new lines or punctuation
  })) {
    result += output.token.text;
  }

  return result;
};

module.exports = textGeneration;
