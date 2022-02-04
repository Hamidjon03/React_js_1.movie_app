import React from "react";

function MovieList(props) {
  const { Poster, Type, imdbID, Year, Title } = props;
  return (
    <div key={imdbID} className="card">
      <img src={Poster} className="card-img-top" alt="poster" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">
          <b>Year</b> {Year}
        </p>
        <p>
          <b>Type:</b> {Type}
        </p>
      </div>
    </div>
  );
}

export default MovieList;
