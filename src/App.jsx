import { Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Homepage from './components/Homepage';
import Marcel from './components/Marcel';
import Parcours from './components/Parcours';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/marcel" element={<Marcel />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route
          path="*"
          element={
            <main className="bad-route">
              <p>
                Incroyable, il se trompe de route à 500 mètres de l'arrivée !
                Les poursuivants sont seulement à quelques secondes derrière
                lui, parviendra t'il à franchir la ligne en premier malgré cela
                ?
              </p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
