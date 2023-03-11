import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import InternalLogin from './Login';
/* import PersonaGest from './persona/PersonaGest';
import PersonaList from './persona/PersonaList'; */
import Cursos from './Cursos';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       {/*  <Route path="/persona/list" element={<PersonaList />} />
        <Route path="/persona/gest" element={<PersonaGest />} /> */}
        <Route path="/texto/:text" element={<Texto />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<InternalLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

function Texto() {
  const { text } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let mode = searchParams.get('mode');
  // setTimeout(() => {
  //   navigate('/persona/gest');
  // }, 5000);
  return <>
    <Menu />
    <div className={mode === 'dark' ? 'dark-content' : ""}>
      Texto Parametro: {text}<br />
      Nombre Search: {searchParams.get('nombre')}<br />
      Apellido Search: {searchParams.get('apellido')}<br />
      <button onClick={() => navigate(-1)}>← Back</button>
      <button onClick={() => navigate('/texto/test')}>← text</button>
    </div>
  </>

}


export default App;
