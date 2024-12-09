import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InStoreOrders from './pages/InStoreOrders'
import SFSOrders from './pages/SFSOrders'
import Tools from './pages/Tools'
import Processes from './pages/Processes'
import Homepage from './pages/Homepage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/InStoreOrders" element={<InStoreOrders />} />
        <Route path="/SFSOrders" element={<SFSOrders />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Processes" element={<Processes />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
