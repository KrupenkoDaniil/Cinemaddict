import { render, RenderPosition } from "../render";
import PopUpView from "../view/popup-view";
import { init } from "../main";

export const showPopUp = (event) => {
    const eventTarget = event.target.closest('.film-card');
    if (eventTarget) {
        // Remove remain PopUp
        let popUp = document.body.querySelector('.film-details');
        popUp ? document.body.removeChild(popUp) : null;


        const targetMovie = init.movies.filter(movie => movie.id === +eventTarget.id)[0];
        render(document.body, new PopUpView(targetMovie), RenderPosition.BEFOREEND)
        // Set PopUp removing
        popUp = document.body.querySelector('.film-details');
        const popUpCloseButton = popUp.querySelector('.film-details__close-btn');
        popUpCloseButton.addEventListener('click', () => document.body.removeChild(popUp));
    }
}