import * as consts from "./consts";
import { generateMovies, getMovies } from "./mock/generate-data";
import { renderTemplate, RenderPosition } from "./render";
import { createHeaderTemplate } from "./view/header-view";
import { createMenuTemplate } from "./view/menu-view";
import { createSortTemplate } from "./view/sort-view";
import { createMoviesListTemplate } from "./view/movies-list-view";
import { createFooterTemplate } from "./view/footer-view";
import { showMovies } from "./modules/show-movies";
import { setKeyEvents } from "./modules/key-events";
import { showPopUp } from "./modules/show-popup";

export const init = (movies) => {
    init.movies = movies;
    init.moviesAmount = movies.length;

    // Render Header
    const headerContainer = document.querySelector('.header');
    renderTemplate(headerContainer, createHeaderTemplate(), RenderPosition.BEFOREEND);

    // Render Main Section
    const mainContainer = document.querySelector('.main');

    // Set PopUp
    mainContainer.addEventListener('click', showPopUp);

    // Render Menu
    const watchList = movies.filter(movie => movie.user_details.watchlist);
    const browsingHistory = movies.filter(movie => movie.user_details.aleady_watched);
    const favoritesList = movies.filter(movie => movie.user_details.favorite); //TODO: deal with it someday!

    renderTemplate(mainContainer, createMenuTemplate(watchList.length, browsingHistory.length, favoritesList.length), RenderPosition.BEFOREEND);

    // Render Sort
    renderTemplate(mainContainer, createSortTemplate(), RenderPosition.BEFOREEND);

    // Render Movies List
    renderTemplate(mainContainer, createMoviesListTemplate(init.moviesAmount), RenderPosition.BEFOREEND);

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
    renderTemplate(footerContainer, createFooterTemplate(init.moviesAmount), RenderPosition.BEFOREEND);
}

getMovies().then(() => {
    const generatedMovies = generateMovies(10);
    setKeyEvents();
    init(generatedMovies);
});


