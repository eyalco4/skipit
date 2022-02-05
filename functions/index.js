const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');

const express = require('express');


const app = express();

admin.initializeApp(functions.config().firebase);


const getFirestore = async () => {
  const firestore = await admin.firestore();
  const writeResult = firestore.collection('line').doc('user1').get().then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      return doc.data();
    }
  })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return writeResult
}

app.get('/', async (req, res) => {
  const firestoreData = await getFirestore();
  const result =
        `<html lang="en">
              <head>
            <meta charset="UTF-8">
              <title>Sample Site</title>
              <style>
                body { padding-top: 50px; }
              </style>
          </head>
          <body>
        
          <div class="container">
            <div class="jumbotron">
              <h1>${firestoreData.id}</h1>
            </div>
          </div>
          </body>
      </html>`
  res.send(result);
});

exports.app = functions.https.onRequest(app);
