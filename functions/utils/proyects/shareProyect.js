const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.shareProyect = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  let resultado = undefined
  const targetDocument = data.proyecto
  const correo = data.aliado
  
  try {
    
    let snapshot = await admin.firestore()
        .collection('usuarios')
        .where('correo', '==', correo)
        .get();
    
    if (!snapshot){
        throw {
        code: "not-found",
        message: "No se encontro el usuario"
        }
    }
    let idd
    snapshot.forEach(doc => {
        resultado = doc.data();
        idd = doc.id
    });
    
    resultado.proyectosInvitado.push(targetDocument)
      
    try {
        snapshot = await admin.firestore()
        .collection('usuarios')
        .doc(idd)
        .update({...resultado});

    } catch (error) {
        throw new functions.https.HttpsError(
        "internal",
        "Unknow Error"
        )
    }

    return {
      code: 'ok',
      message: `Proyecto actualizado.`,
      resultado,
    }

  } catch (error) {
    throw new functions.https.HttpsError(
      error.code || "internal",
       error.message || "Unknow Error"
    )
  }

});