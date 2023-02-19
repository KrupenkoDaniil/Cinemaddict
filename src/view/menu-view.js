import AbstractView from "./abstract-view";

export const createMenuTemplate = (watchlistAmount, browsingHistoryAmount, favoritesAmount) => {
    //TODO: Сделать через цикл (один аргумент filters(сразу с amounts))

    return `
        <nav class="main-navigation">
            <div class="main-navigation__items">
                <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
                <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlistAmount}</span></a>
                <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${browsingHistoryAmount}</span></a>
                <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesAmount}</span></a>
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