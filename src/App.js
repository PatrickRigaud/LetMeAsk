import './App.css';
import { Header } from './components/Header';
import { Sala } from './screens/sala';

function App() {
  

  return (<>
  
    <Header/>
    <Sala 
    nomeSala = "Descarga/Defesa"
    textoPergunta = "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
    nomeUsuario = "Patrick Wesley de Andrade Rigaud"/>
    
    </>
  );
}

export default App;
