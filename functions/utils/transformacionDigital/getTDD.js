const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.getTTD = functions.https.onCall(async (data)=>{
  try {
    const targetDocument = data.proyecto

    // Push the new message into Firestore using the Firebase Admin SDK.
    let snapshot = await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('testTransformacionDigital')
      .doc('resultados')
      .get();

    snapshot = snapshot.data() // casi equivalente a JSON()

    return {
      code: 'ok',
      message: `Proyecto encontrado.`,
      snapshot
    }
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})