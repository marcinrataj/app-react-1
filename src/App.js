import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";

class App extends Component {
  // nasze 2 hotele
  hotels = [
    {
      id: 1,
      name: "Pod akacjami",
      city: "Warszawa",
      rating: 8.3,
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 2,
      name: "Dębowy",
      city: "Lublin",
      rating: 8.8,
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
  ];
  // stan hoteli - na start pusta tabela aby po chwili były władowane
  state = {
    hotels: [],
    loading: true,
  };

  constructor(props) {
    super(props);
    console.log("component constructor");
  }

  // wyszukiwanie hotelu działające
  searchHandler(term) {
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  }

  // po władowaniu komponentu po 2 sek pojawi sie na stronie, niby ze backend
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">  
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        {this.state.loading ? (
          <LoadingIcon />
        ) : (
          <Hotels hotels={this.state.hotels} />
        )}
      </div>
    );
  }
}

export default App;
