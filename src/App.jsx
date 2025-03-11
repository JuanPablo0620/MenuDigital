import './App.css'
import BurguerCardContainer from './components/BurguerCardContainter/BurguerCardContainer'
import Nav from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <BurguerCardContainer />
    </BrowserRouter>
    </>
  )
}

export default App
