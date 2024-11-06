## Implementing HuggingFace models - React / Express

This project make use of Huggingface models to interact with Artificial Intelligence, it shows one way to interact with models using express.js as backend and React as frontend. Hope you find it usefull.

**_Models used from huggingface.co:_**

- Image to text: Salesforce/blip-image-captioning-large
- Translation: Helsinki-NLP/opus-mt-es-en
- Text Generation: mistralai/Mixtral-8x7B-Instruct-v0.1

**_FEEL FREE TO CHANGE MODEL TO ANY OTHER YOU WANT TO TRY, JUST UPDATE THE FILES INSIDE MODELS FOLDER IN THE BACKEND, MAYBE IN A FUTURE UPDATE ILL ADD AN OPTION LIST TO CHOOSE AN SPECIFIC MODEL FOR EACH REQUEST_**

---

**_Stack used:_**

### Frontend:

**_- React_**
**_- VITE_**

### Backend:

**_- Express.js_**
**_- nodemon_**
**_- dotenv_**
**_- cors_**
**_- Router_**

### Middleware:

**_- Hugginface API_**

---

### Current features:

**_Frontend_**

- Image to Text now working from the UI
- Translate Text from Spanish to English now working from the UI
- Text Generation (LLM) now working from the UI

**_Backend_**

By now it just have three endpoints at backend:

    http://localhost:5050/api/image2text (Generate a text based in an Image URL)
    http://localhost:5050/api/translate (To translate text from Spanish to English)
    http://localhost:5050/api/textgeneration (Interact with Mixtral model for text generation (like gpt models))

---

### Requirements:

Create an account in (https://huggingface.co/) and create your own access token and use in your .env.development file as HF_KEY to be retrieved for the server.js, also create your PORT value, i used the 5050.

example backend/.env.development file:

PORT=5050

HF_KEY=youraccesstoken

get your access token here after create your account:

https://huggingface.co/settings/tokens

Also create a frontend/.env.development file for the local API:

example:

VITE_API_URL=http://localhost:5050/api

---

### Steps to install:

1.  git clone

2.  cd huggingface-ai

3.  inside backend `npm i`

4.  inside backend `npm run start`

5.  inside frontend `npm i`

6.  inside frontend `npm run dev`

---
