const functions = require('firebase-functions');
const { getFormData, returnData} = require('../form/getFormData')
exports.getDMDForm = functions.https.onCall(async(data)=>{
  try {
    const targetDocument = data.projectid
    const collectionName = data.name
    const docName = data.doc
    console.log({targetDocument, collectionName, docName})
    return getFormData(
      targetDocument,
      collectionName,
      docName,
      returnData
    )
  } catch (error) {
    throw new functions.https.HttpsError(error.code || "internal", error.message || "Unknow Error")
  }
})