import './App.css';
import Lista from './components/Lista/Lista'

function App() {
  return (
    <div className="App">
      <h1 className='app-titulo'>Minhas Listas de Compras</h1>
      <Lista>Lista de mercado</Lista>
      <Lista>Lista de Casamento</Lista>
    </div>
  );
}

export default App;
