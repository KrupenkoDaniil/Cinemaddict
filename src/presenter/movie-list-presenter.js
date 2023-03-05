
import MenuView from "../view/menu-view";
import SortView from "../view/sort-view";
import MovieCardView from "../view/movie-card-view";
import MoviesListView from "../view/movies-list-view";
import ShowMoreButtonView from "../view/show-more-view";

import { render, RenderPosition, remove } from "../render";
// import { popUpHander } from "../modules/show-popup";
import * as consts from "../consts";
import PopUpView from "../view/popup-view";
import PopUpPresenter from "./popup-presenter";

export default class MovieListPresenter {
    #mainContainer = null;
    #movies = null;
    #movieFilters = null

    #popUpPresenter = null;

    #sortComponent = null;
    #menuComponent = null;
    #moviesRendered = 0;
    #movieListComponent = null;
    #movieListContainer = null;
    #movieComponents = new Map();

    constructor(mainContainer, movies, movieFilters) {
        this.#mainContainer = mainContainer;
        this.#movies = [...movies];
        this.#movieFilters = movieFilters;
    }

    init = () => {
        this.#popUpPresenter = new PopUpPresenter(this.#movies);
        this.#menuComponent = new MenuView(this.#movieFilters);
        this.#sortComponent = new SortView(consts.SORT_CATEGORIES.BY_DEFAULT);
        this.#movieListComponent = new MoviesListView(this.#movies.length);
        this.#movieListContainer = this.#movieListComponent.element.querySelector('.films-list__container');
        this.#renderMainContainer();
    }

    #renderMenu = () => {
        render(this.#mainContainer, this.#menuComponent, RenderPosition.AFTERBEGIN);
    }

    #renderSort = () => {
        render(this.#mainContainer, this.#sortComponent, RenderPosition.BEFOREEND);
    }

    #renderMovieListContainer = () => {
        render(this.#mainContainer, this.#movieListComponent, RenderPosition.BEFOREEND);
        this.#movieListComponent.setClickHandler(this.#popUpPresenter.renderPopUp);
    }

    #renderMovie = (movie) => {
        const movieCardComponent = new MovieCardView(movie);
        this.#movieComponents.set(movie.id, movieCardComponent);
        render(this.#movieListContainer, movieCardComponent, RenderPosition.BEFOREEND);
    }

    #renderMovies = () => {
        let loopNumber = consts.MIN_MOVIES_AMOUNT;
        if (this.#movies.length < loopNumber) {
            loopNumber = this.#movies.length;
        }
        for (let i = 0; i < loopNumber; i++) {
            if (this.#moviesRendered < this.#movies.length) {
                this.#renderMovie(this.#movies[this.#moviesRendered]);
                this.#moviesRendered++;
            }
        }
    }

    #clearMovieList = () => {
        this.#movieComponents.forEach(movieComponent => remove(movieComponent));
        this.#movieComponents.clear();
    }

    #renderMovieList = () => {
        this.#clearMovieList();
        this.#renderMovies();
    }

    #renderShowMoreButton = () => {
        if (this.#movies.length > 0) {
            const showMoreButton = new ShowMoreButtonView(this.#movieListContainer, this.#movies.length - this.#moviesRendered);
            render(this.#movieListContainer, showMoreButton, RenderPosition.AFTEREND);
            showMoreButton.setClickHandler(this.#renderMovies);
        }
    }

    #renderMainContainer = () => {
        if (this.#movies.length) {
            this.#renderMenu();
            this.#renderSort();
            this.#renderMovieListContainer();
            this.#renderMovieList();
            this.#renderShowMoreButton();
        }
    }
}
