import React from 'react'
import {Provider} from 'react-redux'
import IBManga from './src/IBManga'
import store from './src/redux/store'

class App extends React.Component{
  render() {
    return <Provider store={store}>
      <IBManga/>
    </Provider>
  }
}

export default App

