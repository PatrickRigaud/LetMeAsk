import './App.css';
import { Header } from './components/Header';
import { Sala } from './screens/sala';

function App() {
  return (<>
    <Header/>
    <Sala 
    nomeSala = "Teste React"
    textoPergunta = "ceu azul?"
    nomeUsuario = "pedro"/>
    </>
  );
}

export default App;
