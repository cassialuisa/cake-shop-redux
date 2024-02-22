
import './App.css'
import CakeContainer from './components/CakeContainer/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeHookContainer from './components/CakeHookContainer/CakeHookContainer'
import IceCreamContainer from './components/IceCreamContainer/IceCreamContainer'
import CakesContainer from './components/CakesContainer/CakesContainer'

function App() {

  return (
      <>
        <Provider store={store}>
          <CakeHookContainer/>
          <CakeContainer/>
          <IceCreamContainer/>
          <CakesContainer/>
        </Provider>
      </>
  )
}

export default App
