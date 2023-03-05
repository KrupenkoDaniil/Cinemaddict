import AbstractView from "./abstract-view";
import { render, RenderPosition } from "../render";
import * as consts from "../consts";

const createShowMoreButtonTemplate = () => {
    return `
        <button class="films-list__show-more">Show more</button>
    `
}

export default class ShowMoreButtonView extends AbstractView {
    #showMoreButtonContainer = null;
    #moviesAmount = null;

    constructor(showMoreButtonContainer, moviesAmount) {
        super();
        this.#showMoreButtonContainer = showMoreButtonContainer;
        this.#moviesAmount = moviesAmount;
    }

    get template() {
        return createShowMoreButtonTemplate();
    }

    #renderNewShowMoreButton = () => {
        this.element.remove();
        this.#moviesAmount -= consts.MIN_MOVIES_AMOUNT;
        if (this.#moviesAmount > 0) {
            render(this.#showMoreButtonContainer, this.element, RenderPosition.AFTEREND);
        }
    }

    setClickHandler = (callback) => {
        this._callback.click = callback; // в объект добавляем ключ с функцией в виде значения
        this.element.addEventListener('click', this.#clickHandler);
    }

    #clickHandler = () => {
        // Логика callback(а):
        this._callback.click();

        // Логика текущего компонента:
        this.#renderNewShowMoreButton();
    }
}