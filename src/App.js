import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: '8.3',
      describtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: ''
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: '8.8',
      describtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: ''
    }
  ]
state = {
  hotels: this.hotels
  }

  searchHandler(term){
    console.log('szukaj z app', term)
    const hotels = [...this.state.hotels]
    .filter(x => x.name
      .toLowerCase()
      .includes(term.toLowerCase()))
    this.setState( { hotels } )
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;
