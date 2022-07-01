import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Lista de Productos"/>
    </>
  );
}

export default App;
