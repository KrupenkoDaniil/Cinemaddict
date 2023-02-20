import AbstractView from "./abstract-view";

const createMenuTemplate = (movieFilters) => {
    let menuContent = '';
    for (let key in movieFilters) {
        const currentFilter = movieFilters[key];
        const filterIsAllMovies = currentFilter.title === 'All movies' ? true : false;

        if (currentFilter.active) {
            menuContent += `<a href="#${currentFilter.title.split(' ')[0]}" class="main-navigation__item main-navigation__item--active">${currentFilter.title} ${filterIsAllMovies ? '' : `<span class="main-navigation__item-count">${currentFilter.amount}</span>`} </a>`;
            continue;
        }

        menuContent += `<a href="#${currentFilter.title.split(' ')[0]}" class="main-navigation__item">${currentFilter.title} ${filterIsAllMovies ? '' : `<span class="main-navigation__item-count">${currentFilter.amount}</span>`} </a>`;

    }

    return `
        <nav class="main-navigation">
            <div class="main-navigation__items">

                ${menuContent}

            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>
    `;
}

export default class MenuView extends AbstractView {
    #watchlistAmount = null;
    #browsingHistoryAmount = null;
    #favoritesAmount = null;

    constructor(watchlistAmount, browsingHistoryAmount, favoritesAmount) {
        super();

        this.#watchlistAmount = watchlistAmount;
        this.#browsingHistoryAmount = browsingHistoryAmount;
        this.#favoritesAmount = favoritesAmount;
    }

    get template() {
        return createMenuTemplate(this.#watchlistAmount, this.#browsingHistoryAmount, this.#favoritesAmount);
    }

}