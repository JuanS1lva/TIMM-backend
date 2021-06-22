const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.getProyectByUser = functions.https.onCall(async (data) => {
  // Grab the text parameter.
  let resultado = undefined
  
  try {
    
    const correo = data.userEmail

    // if(!correo){
    //   throw {
    //     code: "not-found",
    //     message: "No se encontro el usuario"
    //   }
    // }

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

    snapshot.forEach(doc => {
      resultado = doc.data();
    });

    return {
      code: 'ok',
      message: `Proyectos encontrados.`,
      resultado
    }

  } catch (error) {
    throw new functions.https.HttpsError(
      error.code || "internal",
       error.message || "Unknow Error"
    )
  }

});