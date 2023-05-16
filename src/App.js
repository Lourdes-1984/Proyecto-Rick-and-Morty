import './App.css';
import { useEffect, useState } from 'react';
import { getCaracteres } from './getData';
import Footer from './Footer';
import { CaracterList } from './CaracterList';

function App() {
  const [caracteres, setCaracteres] = useState();
  const obtener = async (page) => await getCaracteres(page).then( resp => {
    setCaracteres(resp.data?.results)
  })
  useEffect(() => {
    obtener(2)
  }, []);
  return (
    <div>
    <header>
        <h1 className="main-title">Rick And Morty Project</h1>
    </header>
    <main id="characters">
        <div id="lds-ring" className="lds-ring">

        <CaracterList character={caracteres}/>
        </div>
    </main>
    <Footer />
</div>
  );
}

export default App;


