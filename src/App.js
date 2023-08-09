import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";

class App extends Component {
  static contextType = ThemeContext;
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
    theme: "primary",
  };

  // wyszukiwanie hotelu działające
  searchHandler(term) {
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    console.log(term, hotels);
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

  changeTheme = () => {
    const newTheme = this.state.theme === "primary" ? "danger" : "primary";
    this.setState({ theme: newTheme });
  };

  render() {
    const header = (
      <Header>
        <Searchbar
          onSearch={(term) => this.searchHandler(term)}
          theme={this.context}
        />
        <ThemeButton onChange={this.changeTheme} />
      </Header>
    );

    const content = (
      this.state.loading ? (
        <LoadingIcon theme={this.context} />
      ) : (
        <Hotels hotels={this.state.hotels} />
      )
    )

    const menu = (<Menu theme={this.context} />)
    const footer = (<Footer theme={this.context} />)

    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        onChange: this.changeTheme
      }}>
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    );
  }
}

export default App;
