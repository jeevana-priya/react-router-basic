
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About/>}/>

    </Route>

  </Routes>
  
  </BrowserRouter>
  </>
      
  );
}


export default App;
