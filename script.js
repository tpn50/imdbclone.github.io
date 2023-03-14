const wrapper = document.getElementById("wrapper");
const title = document.getElementById("title");
const submit = document.getElementById("submit");

const key = document.getElementById("title");
const list = document.getElementById("list");
const lists = document.getElementsByClassName("lists");
const listMovie = document.getElementsByClassName("list-movie");
//console.log(title);

key.addEventListener("keyup", () => {
  const s = title.value;
  const movieTitle = s;
  const apiKey = "dd5c0c00";

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movieTitle
  )}`;

  console.log(movieTitle);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Title != undefined) {
        //console.log(data.Title);
        let movieName = data.Title;
        let moviePoster = data.Poster;
        const lists = document.createElement("div");
        lists.classList.add("lists");
        lists.innerHTML = `<a href="" class="list-movie" style="text-decoration: none">${movieName}</a><img src=${moviePoster} class="list-img"> <button>fav</button>`;
        list.appendChild(lists);
      }
    });
});

submit.addEventListener("click", showDetails);
if (lists) {
  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", showDetailsList);
  }
}

//console.log(lists);
/* Show Details Function................*/

function showDetails() {
  list.style.display = "none";
  // wrapper.removeChild(list);
  console.log(title.value);
  const s = title.value;
  const movieTitle = s;
  const apiKey = "dd5c0c00";

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movieTitle
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let movieName = data.Title;
      let movieYear = data.Year;
      let moviePlot = data.Plot;
      let movieRating = data.Ratings[0].Value;
      let moviePoster = data.Poster;

      const poster = document.createElement("div");
      poster.innerHTML = `<img src="${moviePoster}" />`;
      wrapper.appendChild(poster);
      const movie = document.createElement("div");
      movie.innerHTML = `<h2>${movieName}</h2>`;
      wrapper.appendChild(movie);
      const year = document.createElement("div");
      year.innerHTML = `<h3>${movieYear}</h3>`;
      wrapper.appendChild(year);
      const plot = document.createElement("div");
      plot.innerHTML = `<p>${moviePlot}</p>`;
      wrapper.appendChild(plot);
      const rating = document.createElement("div");
      rating.innerHTML = `<p>${movieRating}</p>`;
      wrapper.appendChild(rating);
    })
    .catch((error) => console.error(error));
  //console.log(lists);
}

function showDetailsList() {
  console.log("manam");
}
