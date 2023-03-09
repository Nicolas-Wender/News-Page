import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SportsPage from './pages/Sports'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />    
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Sports' element={<SportsPage/>}/>
        <Route path='*' element={<div>Página não encontrada</div>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

