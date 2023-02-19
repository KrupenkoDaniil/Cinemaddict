import * as consts from "./consts";
import { generateMovies, getMovies } from "./mock/generate-data";
import { render, RenderPosition } from "./render";
import { setKeyEvents } from "./modules/key-events";
import { showPopUp } from "./modules/show-popup";
import { showMovies } from "./modules/show-movies";

// Import Classes
import HeaderView from "./view/header-view";
import MenuView from "./view/menu-view";
import SortView from "./view/sort-view";
import MoviesListView from "./view/movies-list-view";
import FooterView from "./view/footer-view";

export const init = (movies) => {
    init.movies = movies;
    init.moviesAmount = movies.length;

    // // Render Header
    const headerContainer = document.querySelector('.header');
    render(headerContainer, new HeaderView(), RenderPosition.BEFOREEND)

    // // Render Main Section
    const mainContainer = document.querySelector('.main');

    // // Set PopUp
    mainContainer.addEventListener('click', showPopUp);

    // Render Menu
    const watchList = movies.filter(movie => movie.user_details.watchlist);
    const browsingHistory = movies.filter(movie => movie.user_details.aleady_watched);
    const favoritesList = movies.filter(movie => movie.user_details.favorite); //TODO: deal with it someday!

    render(mainContainer, new MenuView(watchList.length, browsingHistory.length, favoritesList.length), RenderPosition.BEFOREEND);

    // Render Sort
    render(mainContainer, new SortView(), RenderPosition.BEFOREEND);

    // Render Movies List
    render(mainContainer, new MoviesListView(init.moviesAmount), RenderPosition.BEFOREEND);

    if (init.moviesAmount) {
        const moviesContainer = mainContainer.querySelector('.films-list__container');

        const showMoreButton = mainContainer.querySelector('.films-list__show-more');
        showMoreButton.addEventListener('click', () => {
            showMovies(moviesContainer, init.movies);

            if (showMovies.movies.length <= 0) {
                showMoreButton.style.display = 'none';
            }
        });
        showMoreButton.click();
    }

    // Render Footer
    const footerContainer = document.querySelector('.footer__statistics');
    render(footerContainer, new FooterView(init.moviesAmount), RenderPosition.BEFOREEND);
}

getMovies().then(() => {
    const generatedMovies = generateMovies(10);
    setKeyEvents();
    init(generatedMovies);
});





