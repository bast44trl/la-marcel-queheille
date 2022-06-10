import { Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Homepage from './components/Homepage';
import Marcel from './components/Marcel';
import Parcours from './components/Parcours';

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Homepage />} />
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
