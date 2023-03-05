import AbstractView from "./abstract-view";

const createMoviesListTemplate = (moviesAmount) => {
    let moviesListContent;
    if (moviesAmount) {
        moviesListContent = `<div class="films-list__container"></div>`;
    } else {
        moviesListContent = `<h2 class="films-list__title">There are no movies in our database</h2>`;
    }

    return `
        <section class="films">
            <section class="films-list">
                <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
                ${moviesListContent}
            </section>
        </section>
    `;
}

export default class MoviesListView extends AbstractView {
    #moviesAmount = null;

    constructor(moviesAmount) {
        super();
        this.#moviesAmount = moviesAmount;
    }

    get template() {
        return createMoviesListTemplate(this.#moviesAmount);
    }

    setClickHandler = (callback) => {
        this._callback.click = callback; // в объект добавляем ключ с функцией в виде значения
        this.element.querySelector('.films-list__container').addEventListener('click', this.#clickHandler);
    }

    #clickHandler = (event) => {
        // Логика текущего компонента:

        // Логика callback(а):
        this._callback.click(event);
    }
}
