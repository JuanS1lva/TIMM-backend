// const functions = require('firebase-functions');
// // The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// const flatten = require("flat")
// const testOBjt = {
//   "obs": {
//     "a": {
//       "a": "1",
//       "c": "2",
//       "d": "3"
//     },
//     "b": {
//       "a": "5",
//       "b": "4",
//       "c": "4",
//       "d": "2"
//     },
//     "c": {
//       "a": "4",
//       "b": "4",
//       "d": "2"
//     }
//   },
//   "ges": {
//     "a": {
//       "a": "1",
//       "b": "3",
//       "d": "2"
//     },
//     "b": {
//       "a": "1",
//       "b": "3",
//       "c": "5",
//       "d": "4"
//     },
//     "c": {
//       "a": "1",
//       "b": "2"
//     }
//   },
//   "apr": {
//     "a": {
//       "a": "3",
//       "b": "3",
//       "c": "4"
//     },
//     "b": {
//       "a": "4",
//       "b": "5",
//       "c": "2"
//     },
//     "c": {
//       "a": "4",
//       "b": "1",
//       "c": "3",
//       "d": "3"
//     }
//   },
//   "tra": {
//     "a": {
//       "a": "2",
//       "b": "5",
//       "d": "5"
//     },
//     "b": {
//       "a": "3",
//       "b": "5",
//       "d": "4"
//     },
//     "c": {
//       "a": "5",
//       "c": "4"
//     }
//   },
//   "sos": {
//     "a": {
//       "a": "2",
//       "b": "2",
//       "c": "3"
//     },
//     "b": {
//       "a": "3",
//       "c": "4",
//       "d": "5"
//     },
//     "c": {
//       "b": "3"
//     }
//   }

// }
// exports.addInnovationCapacities = functions.https.onCall(async (data) => {
//   try {
//     const targetDocument = 'ULtInrpP8OWofxh9QCB8'
//     // promedios por rubros
//     const flattenObj = flatten(testOBjt)
//     const aCounter = Object.keys(flattenObj).filter((item)=>item.endsWith(".a"))
//     .reduce((counter,item)=>counter+Number(flattenObj[item],10),0)/15
//     const bCounter = Object.keys(flattenObj).filter((item)=>item.endsWith(".b"))
//     .reduce((counter,item)=>counter+Number(flattenObj[item],10),0)/11
//     const cCounter = Object.keys(flattenObj).filter((item)=>item.endsWith(".c"))
//     .reduce((counter,item)=>counter+Number(flattenObj[item],10),0)/10
//     const dCounter = Object.keys(flattenObj).filter((item)=>item.endsWith(".d"))
//     .reduce((counter,item)=>counter+Number(flattenObj[item],10),0)/9
//     // promedios por capacidad y subCapacidad

//     const tempArra = Object.keys(flattenObj)
//     let result = {
//       obs:[0,0,0,0],
//       ges:[0,0,0,0],
//       apr:[0,0,0,0],
//       tra:[0,0,0,0],
//       sos:[0,0,0,0]
//     }
//     for (const value of tempArra) {
//       //obs
//       if(value.includes('obs.a')){
//         result.obs[0]=(result.obs[0] + Number(flattenObj[value],10))/3
//       }
//       if(value.includes('obs.b')){
//         result.obs[1]=(result.obs[1] + Number(flattenObj[value],10))/4
//       }
//       if(value.includes('obs.c')){
//         result.obs[2]=(result.obs[2] + Number(flattenObj[value],10))/3
//       }
//       if(value.includes('obs')){
//         result.obs[3]=(result.obs[3] + Number(flattenObj[value],10))/10
//       }
//       //ges
//       if(value.includes('ges.a')){
//         result.ges[0]=result.ges[0] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('ges.b')){
//         result.ges[1]=result.ges[1] + Number(flattenObj[value],10)/4
//       }
//       if(value.includes('ges.c')){
//         result.ges[2]=result.ges[2] + Number(flattenObj[value],10)/2
//       }
//       if(value.includes('ges')){
//         result.ges[3]=result.ges[3] + Number(flattenObj[value],10)/9
//       }
//       //apr
//       if(value.includes('apr.a')){
//         result.apr[0]=result.apr[0] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('apr.b')){
//         result.apr[1]=result.apr[1] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('apr.c')){
//         result.apr[2]=result.apr[2] + Number(flattenObj[value],10)/4
//       }
//       if(value.includes('apr')){
//         result.apr[3]=result.apr[3] + Number(flattenObj[value],10)/10
//       }
//       //tra
//       if(value.includes('tra.a')){
//         result.tra[0]=result.tra[0] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('tra.b')){
//         result.tra[1]=result.tra[1] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('tra.c')){
//         result.tra[2]=result.tra[2] + Number(flattenObj[value],10)/2
//       }
//       if(value.includes('tra')){
//         result.tra[3]=result.tra[3] + Number(flattenObj[value],10)/8
//       }
//       //sos
//       if(value.includes('sos.a')){
//         result.sos[0]=result.sos[0] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('sos.b')){
//         result.sos[1]=result.sos[1] + Number(flattenObj[value],10)/3
//       }
//       if(value.includes('sos.c')){
//         result.sos[2]=result.sos[2] + Number(flattenObj[value],10)/2
//       }
//       if(value.includes('sos')){
//         result.sos[3]=result.sos[3] + Number(flattenObj[value],10)/8
//       }
//     }
//     console.log({aCounter,bCounter,cCounter,dCounter},{result});
//     const capacidadesDeInnovacion = await admin.firestore()
//       .collection('proyectos')
//       .doc(targetDocument)
//       .collection('capacidadesDeInnvoacion')
//       .add({average:{aCounter,bCounter,cCounter,dCounter},result});
//     return {
//       code: 'ok',
//       // message: `Test de innovacion nuevo con el ID: ${testInnovacion.id}.`,
//       resultados,
//       capacidadesDeInnovacion
//     }



//     throw {
//       code: "not-found",
//       message: "no se encontro la colletion"
//     }
//   } catch (error) {
//     throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
//   }
// })