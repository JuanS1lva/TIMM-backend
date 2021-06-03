// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

admin.initializeApp();

const { addMessage } = require('./utils/addMessage')
// Proyectos
const { createProyect } = require('./utils/proyects/createProyect')
const { editProyect } = require('./utils/proyects/editProyect')
const { deleteProyect } = require('./utils/proyects/deleteProyect')
const { getProyect } = require('./utils/proyects/getProyect')

// test innovacion
const { addTestInnovacion } = require('./utils/test-innovacion/create')
const { getTestInnovacion } = require('./utils/test-innovacion/get')
// capacidades de innovacion
const { addInnovationCapacities } = require('./utils/capadidadesDeInnovacion/index')




////////////////////////////////////////////////////

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

////////////////////////////////////////////////////



exports.addMessage = addMessage

// Proyectos

exports.createProyect = createProyect
exports.editProyect = editProyect
exports.deleteProyect = deleteProyect
exports.getProyect = getProyect

// test-innovacion

exports.addTestInnovacion = addTestInnovacion
exports.getTestInnovacion = getTestInnovacion

// capacidades-de-innovacion

exports.addInnovationCapacities = addInnovationCapacities


