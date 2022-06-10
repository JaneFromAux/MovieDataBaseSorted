import './App.css';
import Movies from './components/Movies';
import SortButton from './components/SortButton';

function App() {
  return (
    <div className="App">
      <SortButton />
      <Movies />
    </div>
  );
}

export default App;
