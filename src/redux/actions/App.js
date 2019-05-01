import C from '../../constants'
import Firebase from '../../Firebase';


export const getMaterials = () => {
    const materialData = [];
    return async (dispatch) => Firebase.firestore().collection(C.MATERIALS).get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          mdata = doc.data();
          mdata.key = doc.id;
          materialData.push(mdata);
        });
        dispatch({
          type: C.GET_MATERIALS,
          payload: materialData
        })       
      }).catch((e) => console.log("ERRORzzzz: ", e))
};

export const getCharacters = () => {
    const characterData = [];
    return async (dispatch) => Firebase.firestore().collection(C.CHARACTERS).get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          cdata = doc.data();
          cdata.key = doc.id;
          characterData.push(cdata);
        });
        dispatch({
          type: C.GET_CHARACTERS,
          payload: characterData
        })       
      }).catch((e) => console.log("ERRORzzzz: ", e))
};

export const updateMaterial = (key,savedAs) => {
  return async (dispatch) =>  Firebase.firestore().collection(C.MATERIALS).doc(key)
    .update({saved: savedAs}).then(()=>{
      //dispatch({type: C.UPDATE_MATERIAL})
    })
    .catch(function(error) {
        console.error("error des", error);
    }); 
}







