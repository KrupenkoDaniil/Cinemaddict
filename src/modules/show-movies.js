import * as consts from "../consts";
import MovieCardView from "../view/movie-card-view";
import { render, RenderPosition } from "../render";

export const showMovies = (container, movies) => {
    if (showMovies.movies === undefined) {
        showMovies.movies = [...movies];
    }
    let loopNumber = consts.MIN_MOVIES_AMOUNT;
    if (showMovies.movies.length < loopNumber) {
        loopNumber = showMovies.movies.length;
    }
    for (let i = 0; i < loopNumber; i++) {
        render(container, new MovieCardView(showMovies.movies.pop()), RenderPosition.BEFOREEND);
    }
}