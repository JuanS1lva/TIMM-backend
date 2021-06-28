const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
//test de transformación digital
exports.setTTD = functions.https.onCall(async (data) => {
  try {
    const targetDocument = data.proyecto
    const contentDocument = data.cuestionario.transForm
    let average = contentDocument.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue, 10);
    }, 0)
    let result = {
      a: 0,
      m: 0,
      b: 0
    }
    for (const value of contentDocument) {
      if (value === "1") {
        result.b++
      } else if (value === "2.5") {
        result.m++
      } else if (value === "5") {
        result.a++
      }
    }
    console.log({average,result});
    const testTransformaciondigital = await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('testTransformacionDigital')
      .doc("resultados")
      .set({
        average,
        result,
        data: data.cuestionario
      });
    console.log({testTransformaciondigital});
      return {
        code: 'ok',
        message: `Test de transformación digital completado.`,        
      }
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})