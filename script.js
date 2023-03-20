const apiKey = "dd5c0c00";
let count = 0;
const main = document.getElementById("main");
const list = document.getElementById("listContainer");
const all = document.getElementById("detailsContainer");
let Fav = [];
const search = document.getElementById("search");
let finalList = document.querySelectorAll(".listTitle");
const FAV = document.getElementById("fav");
const showMovie = async function () {
  try {
    // const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=RRR`);
    // const data = await res.json();
    // console.log(data);
    // let Data = data;
    // Data = {
    //   Title: Data.Title,
    //   Year: Data.Year,
    //   Rating: Data.imdbRating,
    //   Actors: Data.Actors,
    //   Director: Data.Director,
    //   Plot: Data.Plot,
    //   Released: Data.Released,
    //   Duration: Data.Runtime,
    //   Writer: Data.Writer,
    //   Poster: Data.Poster,
    // };
    // console.log(Data);

    // // Rendering Data

    // const markup = `

    //   <img
    //     id="poster"
    //     src= ${Data.Poster}
    //     alt=""
    //   />
    //   <button id="bookmark">Bookmark</button>
    //   <h1 id="movieTitle">${Data.Title}</h1>

    //   <h6 id="year">${Data.Year}</h6>
    //   <h6 id="duration">${Data.Duration}</h6>
    //   <p id="plot">${Data.Plot}</p>
    //   <h4 id="director">Director :${Data.Director}</h4>
    //   <h4 id="writer">Writer : ${Data.Writer}</h4>
    //   <h4 id="stars">Stars : ${Data.Actors}</h4>
    //   <h4 id="rating">IMDB Rating: ${Data.Rating}/10</h4>

    // `;
    // all.insertAdjacentHTML("afterbegin", markup);

    search.addEventListener("keyup", show);

    async function show() {
      console.log(search.value);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${search.value}`
      );
      const data = await res.json();
      console.log(data);
      let Data = data;
      Data = {
        Title: Data.Title,
        Year: Data.Year,
        Rating: Data.imdbRating,
        Actors: Data.Actors,
        Director: Data.Director,
        Plot: Data.Plot,
        Released: Data.Released,
        Duration: Data.Runtime,
        Writer: Data.Writer,
        Poster: Data.Poster,
      };
      const listup = `<div class="listTitle">
      <h3>${Data.Title}</h3>
    </div>`;
      list.insertAdjacentHTML("beforeend", listup);
      finalList = document.querySelectorAll(".listTitle");

      let finalArray = Array.from(finalList);
      console.log(finalArray);

      for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].removeEventListener("click", handleclick);
        finalArray[i].addEventListener("click", handleclick);
      }

      async function handleclick() {
        console.log(this.innerText);
        typeof this.innerText;

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${this.innerText}`
        );
        const data = await res.json();
        let Data = data;
        Data = {
          Title: Data.Title,
          Year: Data.Year,
          Rating: Data.imdbRating,
          Actors: Data.Actors,
          Director: Data.Director,
          Plot: Data.Plot,
          Released: Data.Released,
          Duration: Data.Runtime,
          Writer: Data.Writer,
          Poster: Data.Poster,
        };
        console.log(Data);

        // Rendering Data

        const markup = `

      <img
        id="poster"
        src= ${Data.Poster} 
        alt=""
      />
      <button id="bookmark">Bookmark</button>
      <h1 id="movieTitle">${Data.Title}</h1>

      <h6 id="year">${Data.Year}</h6>
      <h6 id="duration">${Data.Duration}</h6>
      <p id="plot">${Data.Plot}</p>
      <h4 id="director">Director :${Data.Director}</h4>
      <h4 id="writer">Writer : ${Data.Writer}</h4>
      <h4 id="stars">Stars : ${Data.Actors}</h4>
      <h4 id="rating">IMDB Rating: ${Data.Rating}/10</h4>
      
    `;
        all.insertAdjacentHTML("afterbegin", markup);
        const bookmark = document.getElementById("bookmark");
        bookmark.addEventListener("click", handleBookmark);
        function handleBookmark() {
          console.log(Data.Title);
          Fav.push(Data.Title);
          console.log(Fav);
        }
      }
    }
  } catch (err) {
    alert(err);
  }
};

showMovie();

window.addEventListener("hashchange", showMovie);
