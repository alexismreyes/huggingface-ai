const hf = require('../server');

const translationModel = 'Helsinki-NLP/opus-mt-es-en';
const textToTranslate =
  'Estoy viviendo en El Salvador, pero próximamente viviré en Canadá';

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

module.exports = translate;
