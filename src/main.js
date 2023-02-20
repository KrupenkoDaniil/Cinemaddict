// Import Classes
import HeaderView from "./view/header-view";
import MenuView from "./view/menu-view";
import SortView from "./view/sort-view";
import MoviesListView from "./view/movies-list-view";
import FooterView from "./view/footer-view";

// Import Modules
import { generateMovies, getMovies } from "./mock/generate-data";
import { render, RenderPosition } from "./render";
import { setKeyEvents } from "./modules/key-events";
import { popUpHalder } from "./modules/show-popup";
import { showMovies } from "./modules/show-movies";
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

    // Render Header
    const headerContainer = document.querySelector('.header');
    render(headerContainer, new HeaderView(), RenderPosition.BEFOREEND)

    // Render Main Section
    const mainContainer = document.querySelector('.main');

    // Set PopUp
    mainContainer.addEventListener('click', popUpHalder);

    // Render Menu
    render(mainContainer, new MenuView(init.MOVIE_FILTERS), RenderPosition.BEFOREEND);

    // Render Sort
    render(mainContainer, new SortView(consts.SORT_CATEGORIES.BY_DEFAULT), RenderPosition.BEFOREEND);

    // Render Movies List
    render(mainContainer, new MoviesListView(init.MOVIE_FILTERS.ALL_MOVIES.amount), RenderPosition.BEFOREEND);

    if (init.MOVIE_FILTERS.ALL_MOVIES.amount) {
        const moviesContainer = mainContainer.querySelector('.films-list__container');

        const showMoreButton = mainContainer.querySelector('.films-list__show-more');
        showMoreButton.addEventListener('click', () => {
            showMovies(moviesContainer, init.MOVIE_FILTERS.ALL_MOVIES.movies);

            if (showMovies.movies.length <= 0) {
                showMoreButton.style.display = 'none';
            }
        });
        showMoreButton.click();
    }

    // Render Footer
    const footerContainer = document.querySelector('.footer__statistics');
    render(footerContainer, new FooterView(init.MOVIE_FILTERS.ALL_MOVIES.amount), RenderPosition.BEFOREEND);
}

getMovies().then(() => {
    const generatedMovies = generateMovies(10);
    setKeyEvents();
    init(generatedMovies);
});





