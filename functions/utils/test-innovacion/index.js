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

  resultados.lel = cuestionario['lel'].map((x)=>{
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
        (resultados.lel[2] < 0 || resultados.lel[2] > 5.1 ? 0 : resultados.lel[2])
      )
      /
      (
        (resultados.laDireccion[1] < 0 || resultados.laDireccion[1] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[2] < 0 || resultados.laDireccion[2] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[8] < 0 || resultados.laDireccion[8] > 5.1 ? 0 : 1)+
        (resultados.lel[2] < 0 || resultados.lel[2] > 5.1 ? 0 : 1)
      )
    ,
    ['vision']:
      (
        (resultados.laDireccion[3] < 0 || resultados.laDireccion[3] > 5.1 ? 0 : resultados.laDireccion[3])+
        (resultados.laDireccion[9] < 0 || resultados.laDireccion[9] > 5.1 ? 0 : resultados.laDireccion[9])+
        (resultados.CME[5] < 0 || resultados.CME[5] > 5.1 ? 0 : resultados.CME[5])+
        (resultados.lel[0] < 0 || resultados.lel[0] > 5.1 ? 0 : resultados.lel[0])+
        (resultados.Adt[1] < 0 || resultados.Adt[1] > 5.1 ? 0 : resultados.Adt[1])
      )
      /
      (
        (resultados.laDireccion[3] < 0 || resultados.laDireccion[3] > 5.1 ? 0 : 1)+
        (resultados.laDireccion[9] < 0 || resultados.laDireccion[9] > 5.1 ? 0 : 1)+
        (resultados.CME[5] < 0 || resultados.CME[5] > 5.1 ? 0 : 1)+
        (resultados.lel[0] < 0 || resultados.lel[0] > 5.1 ? 0 : 1)+
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
        (resultados.lel[1] < 0 || resultados.lel[1] > 5.1 ? 0 : resultados.lel[1])+
        (resultados.TyP[2] < 0 || resultados.TyP[2] > 5.1 ? 0 : resultados.TyP[2])
      )
      /
      (
        (resultados.CME[4] < 0 || resultados.CME[4] > 5.1 ? 0 : 1)+
        (resultados.CME[7] < 0 || resultados.CME[7] > 5.1 ? 0 : 1)+
        (resultados.lel[1] < 0 || resultados.lel[1] > 5.1 ? 0 : 1)+
        (resultados.TyP[2] < 0 || resultados.TyP[2] > 5.1 ? 0 : 1)
      )
    ,
    ['gestionarProyectos']:
      (
        (resultados.lel[3] < 0 || resultados.lel[3] > 5.1 ? 0 : resultados.lel[3])+
        (resultados.lel[4] < 0 || resultados.lel[4] > 5.1 ? 0 : resultados.lel[4])+
        (resultados.TyP[0] < 0 || resultados.TyP[0] > 5.1 ? 0 : resultados.TyP[0])+
        (resultados.Adt[3] < 0 || resultados.Adt[3] > 5.1 ? 0 : resultados.Adt[3])+
        (resultados.Adt[7] < 0 || resultados.Adt[7] > 5.1 ? 0 : resultados.Adt[7])
      )
      /
      (
        (resultados.lel[4] < 0 || resultados.lel[4] > 5.1 ? 0 : 1)+
        (resultados.lel[3] < 0 || resultados.lel[3] > 5.1 ? 0 : 1)+
        (resultados.TyP[0] < 0 || resultados.TyP[0] > 5.1 ? 0 : 1)+
        (resultados.Adt[3] < 0 || resultados.Adt[3] > 5.1 ? 0 : 1)+
        (resultados.Adt[7] < 0 || resultados.Adt[7] > 5.1 ? 0 : 1)
      )
    ,
    ['medidas']:
      (
        (resultados.lel[5] < 0 || resultados.lel[5] > 5.1 ? 0 : resultados.lel[5])+
        (resultados.TyP[1] < 0 || resultados.TyP[1] > 5.1 ? 0 : resultados.TyP[1])+
        (resultados.TyP[5] < 0 || resultados.TyP[5] > 5.1 ? 0 : resultados.TyP[5])+
        (resultados.TyP[6] < 0 || resultados.TyP[6] > 5.1 ? 0 : resultados.TyP[6])
      )
      /
      (

        (resultados.lel[5] < 0 || resultados.lel[5] > 5.1 ? 0 : 1)+
        (resultados.TyP[1] < 0 || resultados.TyP[1] > 5.1 ? 0 : 1)+
        (resultados.TyP[5] < 0 || resultados.TyP[5] > 5.1 ? 0 : 1)+
        (resultados.TyP[6] < 0 || resultados.TyP[6] > 5.1 ? 0 : 1)
      )
    ,
    ['generarIdeas']:
      (
        (resultados.CME[6] < 0 || resultados.CME[6] > 5.1 ? 0 : resultados.CME[6])+
        (resultados.CME[8] < 0 || resultados.CME[8] > 5.1 ? 0 : resultados.CME[8])+
        (resultados.lel[7] < 0 || resultados.lel[7] > 5.1 ? 0 : resultados.lel[7])+
        (resultados.Adt[5] < 0 || resultados.Adt[5] > 5.1 ? 0 : resultados.Adt[5])
      )
      /
      (

        (resultados.CME[6] < 0 || resultados.CME[6] > 5.1 ? 0 : 1)+
        (resultados.CME[8] < 0 || resultados.CME[8] > 5.1 ? 0 : 1)+
        (resultados.lel[7] < 0 || resultados.lel[7] > 5.1 ? 0 : 1)+
        (resultados.Adt[5] < 0 || resultados.Adt[5] > 5.1 ? 0 : 1)
      )
    ,
    ['filtrarSeleccionar']:
      (
        (resultados.lel[6] < 0 || resultados.lel[6] > 5.1 ? 0 : resultados.lel[6])+
        (resultados.TyP[3] < 0 || resultados.TyP[3] > 5.1 ? 0 : resultados.TyP[3])+
        (resultados.TyP[4] < 0 || resultados.TyP[4] > 5.1 ? 0 : resultados.TyP[4])+
        (resultados.Adt[8] < 0 || resultados.Adt[8] > 5.1 ? 0 : resultados.Adt[8])
      )
      /
      (

        (resultados.lel[6] < 0 || resultados.lel[6] > 5.1 ? 0 : 1)+
        (resultados.TyP[3] < 0 || resultados.TyP[3] > 5.1 ? 0 : 1)+
        (resultados.TyP[4] < 0 || resultados.TyP[4] > 5.1 ? 0 : 1)+
        (resultados.Adt[8] < 0 || resultados.Adt[8] > 5.1 ? 0 : 1)
      )
    ,
    ['capacidadGenerarBeneficios']:
      (
        (resultados.lel[8] < 0 || resultados.lel[8] > 5.1 ? 0 : resultados.lel[8])+
        (resultados.lel[9] < 0 || resultados.lel[9] > 5.1 ? 0 : resultados.lel[9])+
        (resultados.TyP[7] < 0 || resultados.TyP[7] > 5.1 ? 0 : resultados.TyP[7])+
        (resultados.TyP[8] < 0 || resultados.TyP[8] > 5.1 ? 0 : resultados.TyP[8])+
        (resultados.TyP[9] < 0 || resultados.TyP[9] > 5.1 ? 0 : resultados.TyP[9])
      )
      /
      (

        (resultados.lel[8] < 0 || resultados.lel[8] > 5.1 ? 0 : 1)+
        (resultados.lel[9] < 0 || resultados.lel[9] > 5.1 ? 0 : 1)+
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

  const testInnovacion = await admin.firestore()
    .collection('proyectos')
    .doc(targetDocument)
    .collection('testInnovacion')
    .add({cuestionario,resultados});

  return {
    code: 'ok',
    // message: `Test de innovacion nuevo con el ID: ${testInnovacion.id}.`,
    resultados,
    testInnovacion
  }
});