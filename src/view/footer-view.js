import AbstractView from "./abstract-view";

const createFooterTemplate = (moviesAmount) => {
    return `
        <p>${moviesAmount} ${moviesAmount > 1 ? 'movies' : 'movie'} inside</p>
    `;
};

export default class FooterView extends AbstractView {
    #moviesAmount = null;

    constructor(moviesAmount) {
        super();
        this.#moviesAmount = moviesAmount;
    }

    get template() {
        return createFooterTemplate(this.#moviesAmount);
    }
}
