// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

////////////////////////////////////////////////////

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

////////////////////////////////////////////////////

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
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

exports.createProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);
  const infoProyecto = {
    nombre: data.nombre,
    responsable: data.responsable
  }

  // Push the new message into Firestore using the Firebase Admin SDK.
  const proyectoNuevo = await admin.firestore().collection('proyectos').add({...infoProyecto});
  // Send back a message that we've successfully written the message
  return {
    code: 'ok',
    message: `Proyecto nuevo con el ID: ${proyectoNuevo.id} agregado.`,
    infoProyecto,
  }
});


exports.editProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);
  const infoProyecto = {
    nombre: data.nombre,
    responsable: data.responsable
  }
  const targetDocument = data.proyecto

  // Push the new message into Firestore using the Firebase Admin SDK.
  const proyectoUpdate = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .update({...infoProyecto});
  // Send back a message that we've successfully written the message
  return {
    code: 'ok',
    message: `Proyecto actualizado con el ID: ${targetDocument} agregado.`,
    infoProyecto,
  }
});

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

exports.getProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  console.log(data);

  const targetDocument = data.proyecto

  // Push the new message into Firestore using the Firebase Admin SDK.
  let snapshot = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .get();

  snapshot = snapshot.data()

  return {
    code: 'ok',
    message: `Proyecto encontrado.`,
    snapshot
  }
});

