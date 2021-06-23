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

    let nombresProyectosPropios = []
    if (resultado.proyectosPropios){
      for (const proyectoPropio of resultado.proyectosPropios) {
        try {
          snapshot = await admin.firestore()
            .collection('proyectos')
            .doc(proyectoPropio)
            .get();
  
          snapshot = snapshot.data()
          nombresProyectosPropios.push(snapshot.nombre)
        } catch (error) {
          throw new functions.https.HttpsError(
            "internal",
            "Unknow Error"
          )
        }
      }
    }

    let nombresProyectosInvitados = []
    if (resultado.proyectosInvitados){
      for (const proyectoInvitado of resultado.proyectosInvitados) {
        try {
          snapshot = await admin.firestore()
            .collection('proyectos')
            .doc(proyectoInvitado)
            .get();
  
          snapshot = snapshot.data()
          nombresProyectosInvitados.push(snapshot.nombre)
        } catch (error) {
          throw new functions.https.HttpsError(
            "internal",
            "Unknow Error"
          )
        }
      }
    }

    resultado = { 
      ...resultado,
      nombresProyectosPropios,
      nombresProyectosInvitados
    }


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