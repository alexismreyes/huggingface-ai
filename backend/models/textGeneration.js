const hf = require('../server');

const textGenerationModel = 'mistralai/Mixtral-8x7B-Instruct-v0.1';
/*const prompt = 'What are the basic colors?';*/

const textGeneration = async (sourceText) => {
  let result = '';
  for await (const output of hf.textGenerationStream({
    model: textGenerationModel,
    inputs: sourceText,
    parameters: { max_new_tokens: 50 },
    temperature: 0.2, // Adjusted for more deterministic outputs
    stop: ['\n', '.', '!', '?', '...'], // Stops at new lines or punctuation
  })) {
    result += output.token.text;
  }

  return result;
};

module.exports = textGeneration;
