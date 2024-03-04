import './App.css'
import Inicial from './Components/Inicial/Inicial'
import Navbar from './Components/NavBar/Navbar'
import Recursos from "./Components/Recursos/Recursos"
import Conheca from "./Components/Conheca/Conheca"
import Solucao from "./Components/Solucao/Solucao"
import Rodape from "./Components/Rodape/Rodape"
function App() {

  return (
    <>
      <Navbar />
      <Inicial />
      <Recursos />
      <Conheca />
      <Solucao/>
      <Rodape />
    </>
  )
}

export default App
