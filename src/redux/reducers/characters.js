import C from '../../constants'

const initialState = {
  allCharacters: []
};

export default(state = initialState, action) => {
  switch (action.type) {
    case C.GET_CHARACTERS: return {
      ...state,
      authStatusReported: true,
      isUserAuthenticated: action.payload
    }
    default:
      return state;
  }
}