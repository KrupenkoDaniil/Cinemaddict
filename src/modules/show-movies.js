import * as consts from "../consts";
import { renderTemplate, RenderPosition } from "../render";
import { createMovieCardTemplate } from "../view/movie-card-view";

export const showMovies = (container, movies) => {
    if (showMovies.movies === undefined) {
        showMovies.movies = [...movies];
    }
    let loopNumber = consts.MIN_MOVIES_AMOUNT;
    if (showMovies.movies.length < loopNumber) {
        loopNumber = showMovies.movies.length;
    }
    for (let i = 0; i < loopNumber; i++) {
        renderTemplate(container, createMovieCardTemplate(showMovies.movies.pop()), RenderPosition.BEFOREEND);
    }
}