const functions = require("firebase-functions");
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const nextClient = require('./nextClient');
const { v4: uuid } = require('uuid');

const express = require('express');


nextClient.prepare();
const handle = nextClient.getRequestHandler();
const app = express();
// admin.initializeApp(functions.config().firebase);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const getLine = async () => {
  const firestore = await admin.firestore();
  const collection = await firestore.collection('companyA').get();
  const line =  collection.docs.map(doc => doc.data());
  return { line, size: collection.size }
}

const joinLine = async () => {
  try {
    const line = await getLine();
    const id = uuid();
    await admin.firestore().collection('companyA').add({ id })
    return { id, place: line.size + 1 };
  }
  catch(e){
    console.error("Error writing document: ", e);
    return {status: 'error'}
  }
}

app.get('*/_next/*', handle);

app.use('/register', async (req,res) => {
  const lineNumber = await joinLine(req);
  res.send(lineNumber);
});

app.use('/manage',  async (req, res) => {
  const payload = await nextClient.renderToHTML(req, res, '/manage');
  res.send(payload);
});

app.use('/',  async (req, res) => {
  const payload = await nextClient.renderToHTML(req, res, '/');
  res.send(payload);
});


exports.app = functions.https.onRequest(app);
