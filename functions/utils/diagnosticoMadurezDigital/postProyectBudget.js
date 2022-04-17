const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');


exports.postProyectBudget = functions.https.onCall(async (data) =>{
  try {
    let body = data.body
    const targetDocument = data.projectid
    let percentage = 0
    for(const key in body){
        percentage += body[key]
    }
    if(percentage > 100){
      throw "no valid info"
    }
    await admin.firestore()
      .collection('proyectos')
      .doc(targetDocument)
      .collection('diagnosticoMadurezDigital')
      .doc('budget')
      .set({
        body,
        label: bugedLabel(body)
      })
    return {
      code: 'ok',
      message: `DMD budget completado.`,        
    }
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})


function bugedLabel(body){
  const label = {
    gerencia: "Estrategia",
    proveedor: "Relaciones Proveedor",
    produccion: "Producción",
    servicio: "Prestación Servicio",
    inventario: "Gestión inventario",
    cliente: "Relación Cliente",
    gestion: "Gestión"    
  }
  let labelKey = ""
  for(key in body){
    if(key.length>0){
      labelKey = key
    }else if(body[labelKey] <= body[key]){
      labelKey = key
    }
  }
  return label[labelKey]
}