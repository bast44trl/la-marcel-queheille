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
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
