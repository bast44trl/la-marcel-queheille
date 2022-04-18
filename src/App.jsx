import './styles/styles.scss';
import Homepage from './components/Homepage';
import Marcel from './components/Marcel';
import Parcours from './components/Parcours';

function App() {
  return (
    <div className="body">
      <Homepage />
      <Marcel />
      <Parcours />
    </div>
  );
}

export default App;
