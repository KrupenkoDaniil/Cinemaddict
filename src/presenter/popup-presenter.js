import { remove, render, RenderPosition } from "../render"
import PopUpView from "../view/popup-view"


export default class PopUpPresenter {
    #movies = null;
    #currentMovie = null;
    #popUpCompanent = null;

    constructor(movies) {
        this.#movies = movies;

        this.#setKeyDownEvents();
    }

    #setKeyDownEvents = () => {
        document.addEventListener('keydown', (event) => {
            if (event.code == 'Escape') {
                this.#removePopUp();
            }
        })
    }


    #getCurrentPopUpCompanent() {
        if (this.#popUpCompanent) {
            remove(this.#popUpCompanent);
        }
        return new PopUpView(this.#currentMovie);
    }

    #removePopUp = () => {
        remove(this.#popUpCompanent);
    }

    renderPopUp = (event) => {

        // Set PopUpCompanent
        this.#currentMovie = this.#movies.filter(movie => movie.id === +event.target.closest('.film-card').id)[0];
        this.#popUpCompanent = this.#getCurrentPopUpCompanent();

        // Render PopUp + set listeners
        render(document.body, this.#popUpCompanent, RenderPosition.BEFOREEND);
        this.#popUpCompanent.setClickHandler(this.#removePopUp);
    }
}