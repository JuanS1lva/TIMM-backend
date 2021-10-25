const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setAnalitica = functions.https.onCall(async(data)=>{
  const targetDocument = data.proyecto
  const contentDocument = data.cuestionario
  try{
    let result = {
      personas : [0,0,0,0,0],
      procesos : [0,0,0,0,0],
      tecnologia : [0,0,0,0,0],
      contentDocument
    }
    for (const key in contentDocument.personas){
      if(contentDocument.personas[key] == '0' || contentDocument.personas[key] == '1'){
        result.personas[0] += 1 
      } else {
        result.personas[parseInt(contentDocument.personas[key])-1] += 1
      }
    }
    for (const key in contentDocument.procesos){
      if(contentDocument.procesos[key] == '0' || contentDocument.procesos[key] == '1'){
        result.procesos[0] += 1 
      } else {
        result.procesos[parseInt(contentDocument.procesos[key])-1] += 1
      }
    }
    for (const key in contentDocument.tecnologia){
      if(contentDocument.tecnologia[key] == '0' || contentDocument.tecnologia[key] == '1'){
        result.tecnologia[0] += 1 
      } else {
        result.tecnologia[parseInt(contentDocument.tecnologia[key])-1] += 1
      }
    }
    const testAnalitica = await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('TestAnalitica')
      .doc("resultados")
      .set({...result});
    return {
      code: 'ok',
      message: `Test Analitica completado.`,
    }
  }catch(error){
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})