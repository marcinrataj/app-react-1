import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js'
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Hotels/>
    </div>
  );
}

export default App;
