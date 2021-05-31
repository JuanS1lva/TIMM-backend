// Funcion de prueba

const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.addMessage = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);
  const original = data.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({original: original});
  // Send back a message that we've successfully written the message
  return {
    code: 'ok',
    message: `Message with ID: ${writeResult.id} added.`,
    original,
  }
});