import C from '../../constants'
import Firebase from '../../Firebase';


export const getMaterials = () => {
    const materialData = [];
    return async (dispatch) => Firebase.firestore().collection('Material').get()
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



