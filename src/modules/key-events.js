export const setKeyEvents = () => {
    document.addEventListener('keydown', (event) => {

        // Remove PopUp
        const popUp = document.body.querySelector('.film-details');
        if (event.code == "Escape" && popUp) {
            document.body.removeChild(popUp);
        }
    });
}