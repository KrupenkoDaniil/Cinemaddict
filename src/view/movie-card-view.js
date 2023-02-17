export const createMovieCardTemplate = (movie) => {
    let description = movie.film_info.description;
    description = description.length < 140 ? description : description.slice(0, description.length - 2) + '...';

    const runtimeInMinutes = movie.film_info.runtime;

    return `
        <article class="film-card" id="${movie.id}">
            <a class="film-card__link">
                <h3 class="film-card__title">${movie.film_info.title}</h3>
                <p class="film-card__rating">${movie.film_info.total_rating}</p>
                <p class="film-card__info">
                    <span class="film-card__year">${movie.film_info.release.data}</span>
                    <span class="film-card__duration">${Math.floor(runtimeInMinutes / 60)}h ${runtimeInMinutes % 60}m</span>
                    <span class="film-card__genre">${movie.film_info.genre.join(' ')}</span>
                </p>
                <img src="${movie.film_info.poster}" alt="" class="film-card__poster">
                <p class="film-card__description">${description}</p>
                <span class="film-card__comments">${movie.comments.length}</span>
            </a>
            <div class="film-card__controls">
                <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
            </div>
        </article>
    `;
}