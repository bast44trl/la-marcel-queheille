import './styles/styles.scss';
import Homepage from './components/Homepage';
import Marcel from './components/Marcel';
import Parcours from './components/Parcours';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Homepage />
      <Marcel />
      <Parcours />
    </div>
  );
}

export default App;
