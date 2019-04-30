import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import _ from 'lodash';
import rootReducer from './rootReducer'
import {createLogger} from 'redux-logger'

const logger = createLogger()
const middlewares = _.compact([thunk,logger])
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store