import AbstractView from "./abstract-view";
import { SORT_CATEGORIES } from "../consts";

const createSortTemplate = (activeSortType) => {
    let sortContent = '';
    for (let key in SORT_CATEGORIES) {
        const currentSortType = SORT_CATEGORIES[key];
        sortContent += currentSortType === activeSortType ?
            `<li><a href="#" class="sort__button sort__button--active">${currentSortType}</a></li>` :
            `<li><a href="#" class="sort__button">${currentSortType}</a></li>`;
    }

    return `
        <ul class="sort">
            ${sortContent}
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
