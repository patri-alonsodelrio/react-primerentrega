import './App.css';
import './components/ItemListContainer/ItemListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      greeting='Hola, Creando componente...'
      />
    </div>
  );
}

export default App;
