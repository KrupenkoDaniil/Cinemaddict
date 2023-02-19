import { createElement } from "../render";

export default class AbstractView {
    #element = null;

    constructor() {
        if (new.target === AbstractView) {
            throw new Error("Can't instantiate AbstractView, only concrete one.");
        }
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }
        return this.#element;
    }

    get template() { // Обязывает реализовать данный метов в наследнике
        throw new Error('Abstract method not implemented: get template');
    }

}