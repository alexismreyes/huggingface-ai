## Implementing HuggingFace models - React / Express

This project make use of Huggingface models to interact with Artificial Intelligence, it shows one way to interact with models using express.js as backend and React as frontend. Hope you find it usefull.

**_Stack used:_**

### Frontend: (Not working yet, work in progress)

**_- React_**
**_- VITE_**

### Backend: (Already working, use postman or any other client to test it)

**_- Express.js_**
**_- nodemon_**
**_- dotenv_**
**_- Router_**

### Middleware:

**_- Hugginface API_**

---

### Current features:

By now it just have three endpoints at backend, it lefts to build the frontend side using react:

    http://localhost:5050/api/image2text (Generate a text based in an Image URL)
    http://localhost:5050/api/translate (To translate text from Spanish to English)
    http://localhost:5050/api/textgeneration (Interact with Mixtral model for text generation (like gpt models))

---

### Requirements:

Create an account in (https://huggingface.co/) and create your own access token and use in your .env.development file as HF_KEY to be retrieved for the server.js, also create your PORT value, i used the 5050.

example .env.development file:

PORT=5050

HF_KEY=youraccesstoken

get your access token here after create your account:

https://huggingface.co/settings/tokens

---

### Usage:

Check the models folder and change the value for the prompt in each file to make your customs requests to each model.

---

### Steps to install:

1.  git clone

2.  cd huggingface-ai

3.  inside backend `npm i`

4.  inside backend `npm run start`

---
