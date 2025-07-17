import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ElectronicDevices from './Pages/ProductsPage'
import ProductsPage from './Pages/ProductsPage'
import Cards from './Components/Cards'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/electronicDevices' element={<ProductsPage title="Electronic Devices" />} />
        <Route path="/clothes" element={<ProductsPage title="Clothes" />} />
        <Route path="/accessories" element={<ProductsPage title="Accessories" />} />
        <Route path="/scrub" element={<ProductsPage title="Scrub" />} />
      </Routes>
    </>
  )
}

export default App
