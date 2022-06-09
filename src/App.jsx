import { Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Homepage from './components/Homepage';
import Marcel from './components/Marcel';
import Parcours from './components/Parcours';

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/la-marcel-queheille" element={<Homepage />} />
        <Route path="/la-marcel-queheille/marcel" element={<Marcel />} />
        <Route path="/la-marcel-queheille/parcours" element={<Parcours />} />
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
