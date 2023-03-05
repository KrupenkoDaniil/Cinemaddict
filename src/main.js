// Import Classes
import HeaderView from "./view/header-view";
import FooterView from "./view/footer-view";
import PopUpPresenter from "./presenter/popup-presenter";
import MovieListPresenter from "./presenter/movie-list-presenter";

// Import Modules
import { generateMovies, getMovies } from "./mock/generate-data";
import { render, RenderPosition } from "./render";
import * as consts from "./consts";


export const init = (movies) => {
    init.MOVIE_FILTERS = {
        ALL_MOVIES: {
            title: 'All movies',
            active: true,
            movies: movies,
            amount: movies.length
        },
        WATCHLIST: {
            title: 'Watchlist',
            active: false,
            movies: movies.filter(movie => movie.user_details.watchlist),
            get amount() {
                return this.movies.length;
            }
        },
        HISTORY: {
            title: 'History',
            active: false,
            movies: movies.filter(movie => movie.user_details.aleady_watched),
            get amount() {
                return this.movies.length;
            }
        },
        FAVORITES: {
            title: 'Favorites',
            active: false,
            movies: movies.filter(movie => movie.user_details.favorite),
            get amount() {
                return this.movies.length;
            }
        }
    } //? может вынести в отдельную функцию?

    // Render Header Section
    const headerContainer = document.querySelector('.header');
    render(headerContainer, new HeaderView(), RenderPosition.BEFOREEND)

    // Render Main Section
    const mainContainer = document.querySelector('.main');

    // Render Footer
    const footerContainer = document.querySelector('.footer__statistics');
    render(footerContainer, new FooterView(init.MOVIE_FILTERS.ALL_MOVIES.amount), RenderPosition.BEFOREEND);


    // Create Movie List Presenter
    const movieListPresenter = new MovieListPresenter(mainContainer, init.MOVIE_FILTERS.ALL_MOVIES.movies, init.MOVIE_FILTERS);
    movieListPresenter.init();

}

getMovies().then(() => {
    const generatedMovies = generateMovies(11);
    // setKeyEvents();
    init(generatedMovies);
});





