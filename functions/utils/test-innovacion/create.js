const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

exports.addTestInnovacion = functions.https.onCall(async (data) => {
  // Grab the text parameter.

  const targetDocument = data.proyecto

  const cuestionario = data.cuestionario


  let resultados = {}

  resultados.laDireccion = cuestionario['laDireccion'].map((x, index)=>{
    if(index === 4 || index === 6){
      return (5 - ((x+0.01)/1.001))
    }
    return ((x+0.01)/1.001)
  })

  resultados.CME = cuestionario['CME'].map((x)=>{
    return ((x+0.01)/1.001)
  })

  resultados.IeI = cuestionario['IeI'].map((x)=>{
    return ((x+0.01)/1.001)
  })

  resultados.TyP = cuestionario['TyP'].map((x)=>{
    return ((x+0.01)/1.001)
  })

  resultados.Adt = cuestionario['Adt'].map((x, index)=>{
    if(index === 0 || index === 1 || index === 6 || index === 7){
      
      return (5 - ((x+0.01)/1.001))
    }
    return ((x+0.01)/1.001)
  })


  resultados.concretado1 = {
    ['culturaInnovadora']:
      (
        (resultados.laDireccion[0] < 0 || resultados.laDireccion[0] > 5.1 ? 0 : resultados.laDireccion[0])+
        (resultados.laDireccion[5] < 0 || resultados.laDireccion[5] > 5.1 ? 0 : resultados.laDireccion[5])+
        (resultados.laDireccion[6] < 0 || resultados.laDireccion[6] > 5.1 ? 0 : resultados.laDireccion[6])+
        (resultados.Adt[6] < 0 || resultados.Adt[6] > 5.1 ? 0 : resultados.Adt[6])
      )
      /
      (
        (resultados.laDireccion[0] < 0 || resultados.laDireccion[0] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[5] < 0 || resultados.laDireccion[5] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[6] < 0 || resultados.laDireccion[6] > 5.1 ? 0 : 1)+
        (resultados.Adt[6] < 0 || resultados.Adt[6] > 5.1 ? 0 : 1)
      )
    ,
    ['organizacion']:
      (
        (resultados.laDireccion[4] < 0 || resultados.laDireccion[4] > 5.1 ? 0 : resultados.laDireccion[4])+
        (resultados.laDireccion[7] < 0 || resultados.laDireccion[7] > 5.1 ? 0 : resultados.laDireccion[7])+
        (resultados.Adt[0] < 0 || resultados.Adt[0] > 5.1 ? 0 : resultados.Adt[0])+
        (resultados.Adt[2] < 0 || resultados.Adt[2] > 5.1 ? 0 : resultados.Adt[2])
      )
      /
      (
        (resultados.laDireccion[4] < 0 || resultados.laDireccion[4] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[5] < 0 || resultados.laDireccion[5] > 5.1 ? 0 : 1)+
        (resultados.Adt[0] < 0 || resultados.Adt[0] > 5.1 ? 0 : 1)+
        (resultados.Adt[2] < 0 || resultados.Adt[2] > 5.1 ? 0 : 1)
      )
    ,
    ['estrategia']:
      (
        (resultados.laDireccion[1] < 0 || resultados.laDireccion[1] > 5.1 ? 0 : resultados.laDireccion[1])+
        (resultados.laDireccion[2] < 0 || resultados.laDireccion[2] > 5.1 ? 0 : resultados.laDireccion[2])+
        (resultados.laDireccion[8] < 0 || resultados.laDireccion[8] > 5.1 ? 0 : resultados.laDireccion[8])+
        (resultados.IeI[2] < 0 || resultados.IeI[2] > 5.1 ? 0 : resultados.IeI[2])
      )
      /
      (
        (resultados.laDireccion[1] < 0 || resultados.laDireccion[1] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[2] < 0 || resultados.laDireccion[2] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[8] < 0 || resultados.laDireccion[8] > 5.1 ? 0 : 1)+
        (resultados.IeI[2] < 0 || resultados.IeI[2] > 5.1 ? 0 : 1)
      )
    ,
    ['vision']:
      (
        (resultados.laDireccion[3] < 0 || resultados.laDireccion[3] > 5.1 ? 0 : resultados.laDireccion[3])+
        (resultados.laDireccion[9] < 0 || resultados.laDireccion[9] > 5.1 ? 0 : resultados.laDireccion[9])+
        (resultados.CME[5] < 0 || resultados.CME[5] > 5.1 ? 0 : resultados.CME[5])+
        (resultados.IeI[0] < 0 || resultados.IeI[0] > 5.1 ? 0 : resultados.IeI[0])+
        (resultados.Adt[1] < 0 || resultados.Adt[1] > 5.1 ? 0 : resultados.Adt[1])
      )
      /
      (
        (resultados.laDireccion[3] < 0 || resultados.laDireccion[3] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[9] < 0 || resultados.laDireccion[9] > 5.1 ? 0 : 1)+
        (resultados.CME[5] < 0 || resultados.CME[5] > 5.1 ? 0 : 1)+
        (resultados.IeI[0] < 0 || resultados.IeI[0] > 5.1 ? 0 : 1)+
        (resultados.Adt[1] < 0 || resultados.Adt[1] > 5.1 ? 0 : 1)
      )
    ,
    ['escucharAlCliente']:
      (
        (resultados.CME[0] < 0 || resultados.CME[0] > 5.1 ? 0 : resultados.CME[0])+
        (resultados.CME[1] < 0 || resultados.CME[1] > 5.1 ? 0 : resultados.CME[1])+
        (resultados.CME[2] < 0 || resultados.CME[2] > 5.1 ? 0 : resultados.CME[2])+
        (resultados.CME[3] < 0 || resultados.CME[3] > 5.1 ? 0 : resultados.CME[3])
      )
      /
      (
        (resultados.CME[0] < 0 || resultados.CME[0] > 5.1 ? 0 : 1)+
        (resultados.CME[1] < 0 || resultados.CME[1] > 5.1 ? 0 : 1)+
        (resultados.CME[2] < 0 || resultados.CME[2] > 5.1 ? 0 : 1)+
        (resultados.CME[3] < 0 || resultados.CME[3] > 5.1 ? 0 : 1)
      )
    ,
    ['escucharAlCliente']:
      (
        (resultados.CME[0] < 0 || resultados.CME[0] > 5.1 ? 0 : resultados.CME[0])+
        (resultados.CME[1] < 0 || resultados.CME[1] > 5.1 ? 0 : resultados.CME[1])+
        (resultados.CME[2] < 0 || resultados.CME[2] > 5.1 ? 0 : resultados.CME[2])+
        (resultados.CME[3] < 0 || resultados.CME[3] > 5.1 ? 0 : resultados.CME[3])
      )
      /
      (
        (resultados.CME[0] < 0 || resultados.CME[0] > 5.1 ? 0 : 1)+
        (resultados.CME[1] < 0 || resultados.CME[1] > 5.1 ? 0 : 1)+
        (resultados.CME[2] < 0 || resultados.CME[2] > 5.1 ? 0 : 1)+
        (resultados.CME[3] < 0 || resultados.CME[3] > 5.1 ? 0 : 1)
      )
    ,
    ['aperturaAlExterior']:
      (
        (resultados.CME[4] < 0 || resultados.CME[4] > 5.1 ? 0 : resultados.CME[4])+
        (resultados.CME[7] < 0 || resultados.CME[7] > 5.1 ? 0 : resultados.CME[7])+
        (resultados.IeI[1] < 0 || resultados.IeI[1] > 5.1 ? 0 : resultados.IeI[1])+
        (resultados.TyP[2] < 0 || resultados.TyP[2] > 5.1 ? 0 : resultados.TyP[2])
      )
      /
      (
        (resultados.CME[4] < 0 || resultados.CME[4] > 5.1 ? 0 : 1)+
        (resultados.CME[7] < 0 || resultados.CME[7] > 5.1 ? 0 : 1)+
        (resultados.IeI[1] < 0 || resultados.IeI[1] > 5.1 ? 0 : 1)+
        (resultados.TyP[2] < 0 || resultados.TyP[2] > 5.1 ? 0 : 1)
      )
    ,
    ['gestionarProyectos']:
      (
        (resultados.IeI[3] < 0 || resultados.IeI[3] > 5.1 ? 0 : resultados.IeI[3])+
        (resultados.IeI[4] < 0 || resultados.IeI[4] > 5.1 ? 0 : resultados.IeI[4])+
        (resultados.TyP[0] < 0 || resultados.TyP[0] > 5.1 ? 0 : resultados.TyP[0])+
        (resultados.Adt[3] < 0 || resultados.Adt[3] > 5.1 ? 0 : resultados.Adt[3])+
        (resultados.Adt[7] < 0 || resultados.Adt[7] > 5.1 ? 0 : resultados.Adt[7])
      )
      /
      (
        (resultados.IeI[4] < 0 || resultados.IeI[4] > 5.1 ? 0 : 1)+
        (resultados.IeI[3] < 0 || resultados.IeI[3] > 5.1 ? 0 : 1)+
        (resultados.TyP[0] < 0 || resultados.TyP[0] > 5.1 ? 0 : 1)+
        (resultados.Adt[3] < 0 || resultados.Adt[3] > 5.1 ? 0 : 1)+
        (resultados.Adt[7] < 0 || resultados.Adt[7] > 5.1 ? 0 : 1)
      )
    ,
    ['medidas']:
      (
        (resultados.IeI[5] < 0 || resultados.IeI[5] > 5.1 ? 0 : resultados.IeI[5])+
        (resultados.TyP[1] < 0 || resultados.TyP[1] > 5.1 ? 0 : resultados.TyP[1])+
        (resultados.TyP[5] < 0 || resultados.TyP[5] > 5.1 ? 0 : resultados.TyP[5])+
        (resultados.TyP[6] < 0 || resultados.TyP[6] > 5.1 ? 0 : resultados.TyP[6])
      )
      /
      (

        (resultados.IeI[5] < 0 || resultados.IeI[5] > 5.1 ? 0 : 1)+
        (resultados.TyP[1] < 0 || resultados.TyP[1] > 5.1 ? 0 : 1)+
        (resultados.TyP[5] < 0 || resultados.TyP[5] > 5.1 ? 0 : 1)+
        (resultados.TyP[6] < 0 || resultados.TyP[6] > 5.1 ? 0 : 1)
      )
    ,
    ['generarIdeas']:
      (
        (resultados.CME[6] < 0 || resultados.CME[6] > 5.1 ? 0 : resultados.CME[6])+
        (resultados.CME[8] < 0 || resultados.CME[8] > 5.1 ? 0 : resultados.CME[8])+
        (resultados.IeI[7] < 0 || resultados.IeI[7] > 5.1 ? 0 : resultados.IeI[7])+
        (resultados.Adt[5] < 0 || resultados.Adt[5] > 5.1 ? 0 : resultados.Adt[5])
      )
      /
      (

        (resultados.CME[6] < 0 || resultados.CME[6] > 5.1 ? 0 : 1)+
        (resultados.CME[8] < 0 || resultados.CME[8] > 5.1 ? 0 : 1)+
        (resultados.IeI[7] < 0 || resultados.IeI[7] > 5.1 ? 0 : 1)+
        (resultados.Adt[5] < 0 || resultados.Adt[5] > 5.1 ? 0 : 1)
      )
    ,
    ['filtrarSeleccionar']:
      (
        (resultados.IeI[6] < 0 || resultados.IeI[6] > 5.1 ? 0 : resultados.IeI[6])+
        (resultados.TyP[3] < 0 || resultados.TyP[3] > 5.1 ? 0 : resultados.TyP[3])+
        (resultados.TyP[4] < 0 || resultados.TyP[4] > 5.1 ? 0 : resultados.TyP[4])+
        (resultados.Adt[8] < 0 || resultados.Adt[8] > 5.1 ? 0 : resultados.Adt[8])
      )
      /
      (

        (resultados.IeI[6] < 0 || resultados.IeI[6] > 5.1 ? 0 : 1)+
        (resultados.TyP[3] < 0 || resultados.TyP[3] > 5.1 ? 0 : 1)+
        (resultados.TyP[4] < 0 || resultados.TyP[4] > 5.1 ? 0 : 1)+
        (resultados.Adt[8] < 0 || resultados.Adt[8] > 5.1 ? 0 : 1)
      )
    ,
    ['capacidadGenerarBeneficios']:
      (
        (resultados.IeI[8] < 0 || resultados.IeI[8] > 5.1 ? 0 : resultados.IeI[8])+
        (resultados.IeI[9] < 0 || resultados.IeI[9] > 5.1 ? 0 : resultados.IeI[9])+
        (resultados.TyP[7] < 0 || resultados.TyP[7] > 5.1 ? 0 : resultados.TyP[7])+
        (resultados.TyP[8] < 0 || resultados.TyP[8] > 5.1 ? 0 : resultados.TyP[8])+
        (resultados.TyP[9] < 0 || resultados.TyP[9] > 5.1 ? 0 : resultados.TyP[9])
      )
      /
      (

        (resultados.IeI[8] < 0 || resultados.IeI[8] > 5.1 ? 0 : 1)+
        (resultados.IeI[9] < 0 || resultados.IeI[9] > 5.1 ? 0 : 1)+
        (resultados.TyP[7] < 0 || resultados.TyP[7] > 5.1 ? 0 : 1)+
        (resultados.TyP[8] < 0 || resultados.TyP[8] > 5.1 ? 0 : 1)+
        (resultados.TyP[9] < 0 || resultados.TyP[9] > 5.1 ? 0 : 1)
      )
    ,
    ['capacidadRevisarAprender']:
      (
        (resultados.CME[9] < 0 || resultados.CME[9] > 5.1 ? 0 : resultados.CME[9])+
        (resultados.Adt[4] < 0 || resultados.Adt[4] > 5.1 ? 0 : resultados.Adt[4])+
        (resultados.Adt[9] < 0 || resultados.Adt[9] > 5.1 ? 0 : resultados.Adt[9])
      )
      /
      (
        (resultados.CME[9] < 0 || resultados.CME[9] > 5.1 ? 0 : 1)+
        (resultados.Adt[4] < 0 || resultados.Adt[4] > 5.1 ? 0 : 1)+
        (resultados.Adt[9] < 0 || resultados.Adt[9] > 5.1 ? 0 : 1)
      )
    ,
  }
  let graficos1=[]

  graficos1.push(resultados.concretado1['culturaInnovadora'])
  graficos1.push(resultados.concretado1['organizacion'])
  graficos1.push(resultados.concretado1['estrategia'])
  graficos1.push(resultados.concretado1['vision'])
  graficos1.push(resultados.concretado1['escucharAlCliente'])
  graficos1.push(resultados.concretado1['aperturaAlExterior'])
  graficos1.push(resultados.concretado1['gestionarProyectos'])
  graficos1.push(resultados.concretado1['medidas'])
  graficos1.push(resultados.concretado1['generarIdeas'])
  graficos1.push(resultados.concretado1['filtrarSeleccionar'])
  graficos1.push(resultados.concretado1['capacidadGenerarBeneficios'])
  graficos1.push(resultados.concretado1['capacidadRevisarAprender'])


  resultados.concretado2 = {
    ['CulturaYOrganizacion']:
      (
        (resultados.concretado1.culturaInnovadora != undefined ? resultados.concretado1.culturaInnovadora : 0)+
        (resultados.concretado1.organizacion != undefined ? resultados.concretado1.organizacion : 0)
      )
      /
      (
        (resultados.concretado1.culturaInnovadora != undefined ? 1 : 0)+
        (resultados.concretado1.culturaInnovadora != undefined ? 1 : 0)
      )
    ,
    ['VisionYEstrategia']:
      (
        (resultados.concretado1.estrategia != undefined ? resultados.concretado1.estrategia : 0)+
        (resultados.concretado1.vision != undefined ? resultados.concretado1.vision : 0)
      )
      /
      (
        (resultados.concretado1.estrategia != undefined ? 1 : 0)+
        (resultados.concretado1.vision != undefined ? 1 : 0)
      )
    ,
    ['AperturaAlExterior']:
      (
        (resultados.concretado1.escucharAlCliente != undefined ? resultados.concretado1.escucharAlCliente : 0)+
        (resultados.concretado1.aperturaAlExterior != undefined ? resultados.concretado1.aperturaAlExterior : 0)
      )
      /
      (
        (resultados.concretado1.escucharAlCliente != undefined ? 1 : 0)+
        (resultados.concretado1.aperturaAlExterior != undefined ? 1 : 0)
      )
    ,
    ['Procesos']:
      (
        (resultados.concretado1.gestionarProyectos != undefined ? resultados.concretado1.gestionarProyectos : 0)+
        (resultados.concretado1.medidas != undefined ? resultados.concretado1.medidas : 0)
      )
      /
      (
        (resultados.concretado1.gestionarProyectos != undefined ? 1 : 0)+
        (resultados.concretado1.medidas != undefined ? 1 : 0)
      )
    ,
    ['Explorar']:
      (
        (resultados.concretado1.generarIdeas != undefined ? resultados.concretado1.generarIdeas : 0)+
        (resultados.concretado1.filtrarSeleccionar != undefined ? resultados.concretado1.filtrarSeleccionar : 0)
      )
      /
      (
        (resultados.concretado1.generarIdeas != undefined ? 1 : 0)+
        (resultados.concretado1.filtrarSeleccionar != undefined ? 1 : 0)
      )
    ,
    ['Realizar']:
      (
        (resultados.concretado1.capacidadGenerarBeneficios != undefined ? resultados.concretado1.capacidadGenerarBeneficios : 0)+
        (resultados.concretado1.capacidadRevisarAprender != undefined ? resultados.concretado1.capacidadRevisarAprender : 0)
      )
      /
      (
        (resultados.concretado1.capacidadGenerarBeneficios != undefined ? 1 : 0)+
        (resultados.concretado1.capacidadRevisarAprender != undefined ? 1 : 0)
      )
    ,
  }

  let graficos2 = []

  graficos2.push(resultados.concretado2['CulturaYOrganizacion'])
  graficos2.push(resultados.concretado2['VisionYEstrategia'])
  graficos2.push(resultados.concretado2['AperturaAlExterior'])
  graficos2.push(resultados.concretado2['Procesos'])
  graficos2.push(resultados.concretado2['Explorar'])
  graficos2.push(resultados.concretado2['Realizar'])

  const testInnovacion = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .collection('testInnovacion')
    .doc('test')
    .set({cuestionario,resultados,graficos1,graficos2});

  return {
    code: 'ok',
    // message: `Test de innovacion nuevo con el ID: ${testInnovacion.id}.`,
    testInnovacion,
  }
});