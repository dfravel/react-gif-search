import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import request from "superagent";
import GifModal from "./components/GifModal";
import "./styles/app.css";

class App extends Component {
  state = {};

  constructor() {
    super();

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange = term => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(
      /\s/g,
      "+"
    )}&api_key=7xxGL7BEYL8RIstNh89PDVbJvcQtKC9c`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList
          gifs={this.state.gifs}
          onGifSelect={selectedGif => this.openModal(selectedGif)}
        />
        <GifModal
          modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={() => this.closeModal()}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
