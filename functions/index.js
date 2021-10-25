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
const { getCDI } = require('./utils/capadidadesDeInnovacion/getCDI')
// Test de transformacion digital
const { setTTD } = require('./utils/transformacionDigital/setTDD')
const { getTTD } = require('./utils/transformacionDigital/getTDD')
// Test de IA
const { setTestIA } = require('./utils/testIA/setTestIA')
const { getTestIA } = require('./utils/testIA/getTestIA')
// Test de Analitica
const { setAnalitica } = require('./utils/analitica/setAnalitica')
const { getAnalitica } = require('./utils/analitica/getAnalitica')


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
exports.getCDI = getCDI

// test-de-transformacion-digital

exports.setTTD = setTTD
exports.getTTD = getTTD

// test-de-IA

exports.setTestIA = setTestIA
exports.getTestIA = getTestIA

// test-analitica

exports.setAnalitica = setAnalitica
exports.getAnalitica = getAnalitica


