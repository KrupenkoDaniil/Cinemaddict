import AbstractView from "./abstract-view";

const createSortTemplate = (currentSortType) => {
    //TODO: сделать через через цикл (добавить в consts) + текущий sortType

    return `
        <ul class="sort">
            <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
            <li><a href="#" class="sort__button">Sort by date</a></li>
            <li><a href="#" class="sort__button">Sort by rating</a></li>
        </ul>
    `;
}

export default class SortView extends AbstractView {
    #currentSortType = null;

    constructor(currentSortType) {
        super();

        this.#currentSortType = currentSortType;
    }

    get template() {
        return createSortTemplate(this.#currentSortType);
    }

}
