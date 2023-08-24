import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
    </div>
  );
}

export default App;
