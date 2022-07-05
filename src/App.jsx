import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Lista de Productos"/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
