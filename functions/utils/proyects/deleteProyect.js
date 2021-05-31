const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.deleteProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);

  const targetDocument = data.proyecto

  // Push the new message into Firestore using the Firebase Admin SDK.
  const proyectoUpdate = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .delete();
  // Send back a message that we've successfully written the message
  return {
    code: 'ok',
    message: `Proyecto borrado correctamente.`,
  }
});