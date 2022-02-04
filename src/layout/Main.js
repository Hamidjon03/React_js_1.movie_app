import React, { Component } from 'react';
import Movie from '../components/Movie';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import Search from './Search';

class Main extends Component {
  state = {
    movies: [],
    loading: true
  }


  componentDidMount(){
    fetch("http://www.omdbapi.com/?apikey=d4c83e29&s=iron")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(
      `http://www.omdbapi.com/?apikey=d4c83e29&s=${str ? str : "panda"}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }


  render() {
    const {movies} = this.state
    return (
      <div>
        <Header />
        <div className="content container p-5">
          <Search searchMovies={this.searchMovies} />
          {this.state.loading ? <Loading /> : <Movie movies={movies} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;