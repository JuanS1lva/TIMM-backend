const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.getTestInnovacion = functions.https.onCall(async (data) => {
  // Grab the text parameter.

  const targetDocument = data.proyecto

  console.log("proyectooo",targetDocument);
  
  let testInnovacion = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .collection('testInnovacion')
    .doc('test')
    .get();

    testInnovacion = testInnovacion.data()

  return {
    code: 'ok',
    // message: `Test de innovacion nuevo con el ID: ${testInnovacion.id}.`,
    testInnovacion,
  }
});