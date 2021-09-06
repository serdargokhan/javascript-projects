const searchText = document.querySelector(".input");
const container = document.querySelector(".container");

async function getMovies() {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=3f5f82fbc0218b074815ce9b7491bd5c");
    const res = await response.json();
    return res;
}

getMovies().then(res => {
        for (let i = 0; i < 20; i++) {
            html = `
            <div class="movie-container">
                <div class="img">
                    <img class="images" src="https://image.tmdb.org/t/p/original${res.results[i].poster_path}" alt="${res.results[i].original_title}">
                </div>
                <div class="text-container">
                    <h3 class="movie-title">${res.results[i].original_title}</h3>
                    <span class="movie-score">${res.results[i].vote_average}</span>
                </div>
            </div>
        `;
            container.insertAdjacentHTML("beforeend", html);
        }

        const movieScore = document.querySelectorAll(".movie-score");
        const movieTitle = document.querySelectorAll(".movie-title");

        movieTitle.forEach(item => {
            if (item.innerHTML.length > 14) item.classList.add("fontSize");
        });

        movieScore.forEach(item => {
            if (item.innerHTML >= 7.5) item.classList.add("green");
            if (item.innerHTML < 7.5) item.classList.add("yellow");
        })

    })
    .catch(err => {
        console.error(err);
    });