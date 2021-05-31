const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

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