const hf = require('../server');

const translationModel = 'Helsinki-NLP/opus-mt-es-en';
/*const prompt =
  'Estoy viviendo en El Salvador, pero próximamente viviré en Canadá';*/

const translate = async (text2Translate) => {
  const tranlasted = await hf.translation({
    model: translationModel,
    inputs: text2Translate,
    parameters: {
      src_lang: 'spa',
      tgt_lang: 'eng',
    },
  });

  return tranlasted;
};

module.exports = translate;
