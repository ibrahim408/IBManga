import {combineReducers} from 'redux'
import material from './reducers/material'
import characters from './reducers/characters'

const rootReducer = combineReducers({
  material: material,
  characters: characters
  }
)

export default rootReducer