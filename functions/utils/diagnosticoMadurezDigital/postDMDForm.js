const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.postDMDForm = functions.https.onCall(async (data) =>{
  try {
    let body = data.body
    const targetDocument = data.projectid
    const label = data.label
    await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('diagnosticoMadurezDigital')
      .doc(label)
      .set({
        raw: body,
        averages: dataRead(body)
      })
    return {
      code: 'ok',
      message: `DMD form completado.`,        
    }
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})

function dataRead(data){
  let result = {}
  for (key in data){
    result[key] = objectMaker(data[key])
  }
  return result
}

function objectMaker(data){
  let result = {}
  if (data?.facilitadores){
    result["facilitadores"] = averageCalculator(data.facilitadores)
  }
  if (data?.madurez){
    result["madurez"] = averageCalculator(data.madurez)
  }
  return result
}

function averageCalculator(data){
  let dataCount = 0
  let average = 0
  for ( key in data ){
    average += data[key]
    dataCount++
  }
  return average/dataCount
}

