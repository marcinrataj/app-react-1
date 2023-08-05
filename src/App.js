import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js'
import Hotels from './components/Hotels/Hotels';
import Hotel from './components/Hotels/Hotel/Hotel'

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Menu/>
      <hr/>
      <Hotels/>
    </div>
  );
}

export default App;
