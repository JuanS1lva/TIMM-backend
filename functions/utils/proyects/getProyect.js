const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.getProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);

  const targetDocument = data.proyecto

  // Push the new message into Firestore using the Firebase Admin SDK.
  let snapshot = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .get();

  snapshot = snapshot.data() // casi equivalente a JSON()

  return {
    code: 'ok',
    message: `Proyecto encontrado.`,
    snapshot
  }
});