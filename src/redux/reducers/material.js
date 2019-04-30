import C from '../../constants'

const initialState = {
  allMaterial: []
};

export default(state = initialState, action) => {
  switch (action.type) {
    case C.GET_MATERIALS: return {
      ...state,
      allMaterial: [...state.allMaterial, ...action.payload],
    }
    default:
      return state;
  }
}


