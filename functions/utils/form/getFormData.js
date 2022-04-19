const admin = require('firebase-admin');

async function getFormData(proyectId, collectionName, docName, callable=null){
  let snapshot = await admin.firestore()
    .collection('proyectos')
    .doc(proyectId)
    .collection(collectionName)
    .doc(docName)
    .get();
  snapshot = snapshot.data()
  if (callable) {
    return callable(snapshot)
  }
  return snapshot
};

function returnData(data){
  return {
    code: 'ok',
    message: `Proyecto encontrado.`,
    data
  }
};

exports.getFormData = getFormData
exports.returnData = returnData
