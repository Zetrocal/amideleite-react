import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './data/router/router'

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
