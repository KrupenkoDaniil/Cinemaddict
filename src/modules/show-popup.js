import { render, RenderPosition } from "../render";
import PopUpView from "../view/popup-view";
import { init } from "../main";

export const removePopUp = () => {
    const popUp = document.body.querySelector('.film-details');
    popUp ? document.body.removeChild(popUp) : null;
}

const createPopUp = (eventTarget) => {
    const targetMovie = init.MOVIE_FILTERS.ALL_MOVIES.movies.filter(movie => movie.id === +eventTarget.id)[0];
    render(document.body, new PopUpView(targetMovie), RenderPosition.BEFOREEND);
}

export const popUpHalder = (event) => {
    const eventTarget = event.target.closest('.film-card');
    if (eventTarget) {

        // Remove remain PopUp
        removePopUp();

        createPopUp(eventTarget);

        // Set PopUp removing
        const popUpCloseButton = document.querySelector('.film-details__close-btn');
        popUpCloseButton.addEventListener('click', removePopUp);
    }
}