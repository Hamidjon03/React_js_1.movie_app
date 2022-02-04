import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: "panda",
    type: "all"
  }

  handleKey = (e) => {
    if(e.key === "Enter"){
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }


  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="my-1">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="mb-2 text-start">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                checked={this.state.type === "all"}
                className="form-check-input"
                type="radio"
                name="type"
                id="inlineCheckbox1"
                data-type="all"
                onChange={this.handleFilter}
              />
              <span>all</span>
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="inlineCheckbox2"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span>movie</span>
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="inlineCheckbox3"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;