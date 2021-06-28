const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
exports.setTestIA = functions.https.onCall(async (data) => {
  try {
    const targetDocument = data.proyecto
    const contentDocument = data.cuestionario
    let result = {
      personas:[0,0,0,0,0,0],
      per:{
        inexistente:0,
        existente:0,
      },
      procesos:[0,0,0,0,0,0],
      pro:{
        inexistente:0,
        existente:0,
      },
      tecnologia:[0,0,0,0,0,0],
      tec:{
        inexistente:0,
        existente:0,
      },
    }
    for (const key in contentDocument.personas) {
      result.personas[contentDocument.personas[key]] += 1 
      result.procesos[contentDocument.procesos[key]] += 1 
      result.tecnologia[contentDocument.tecnologia[key]] += 1 
    }
    result.per.inexistente = result.personas[0]
    result.pro.inexistente = result.procesos[0]
    result.tec.inexistente = result.tecnologia[0]
    result.per.existente = result.personas.reduce(function(valorAnterior, valorActual, indice){
      if(indice!=0){
        return valorAnterior + valorActual
      } else {
        return valorAnterior
      }
    },0)
    result.pro.existente = result.procesos.reduce(function(valorAnterior, valorActual, indice){
      if(indice!=0){
        return valorAnterior + valorActual
      } else {
        return valorAnterior
      }
    },0)
    result.tec.existente = result.tecnologia.reduce(function(valorAnterior, valorActual, indice){
      if(indice!=0){
        return valorAnterior + valorActual
      } else {
        return valorAnterior
      }
    },0)
    const testIA = await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('TestIA')
      .doc("resultados")
      .set({...result});
      console.log(testIA);
    return {
      code: 'ok',
      message: `TestIA completado.`,
      result       
    }
    console.log({result});
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})