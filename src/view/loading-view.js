import AbstractView from "./abstract-view";

const createLoadingTemplate = () => {
    return `
        <h2 class="films-list__title">Loading...</h2>
    `
}

export default class LoadingView extends AbstractView {

    constructor() {
        super();
    }

    get template() {
        return createLoadingTemplate();
    }

}   