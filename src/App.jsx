import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Cards from './components/card/Cards';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Hola 2"/>
    <Cards />
    </>
  );
}

export default App;
