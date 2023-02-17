export const createFooterTemplate = (moviesAmount) => {

    return `
        <p>${moviesAmount} ${moviesAmount > 1 ? 'movies' : 'movie'} inside</p>
    `;
}