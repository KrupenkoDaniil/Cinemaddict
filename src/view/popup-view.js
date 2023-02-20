import AbstractView from "./abstract-view";
import CommentsView from "./comment-view";

const createPopUpTemplate = (movie) => {
    const runtimeInMinutes = movie.film_info.runtime;

    return `
        <section class="film-details">
            <form class="film-details__inner" action="" method="get">
                <div class="film-details__top-container">
                <div class="film-details__close">
                    <button class="film-details__close-btn" type="button">close</button>
                </div>
                <div class="film-details__info-wrap">
                    <div class="film-details__poster">
                        <img class="film-details__poster-img" src="${movie.film_info.poster}" alt="">

                        <p class="film-details__age">${movie.film_info.age_rating}</p>
                    </div>

                    <div class="film-details__info">
                        <div class="film-details__info-head">
                            <div class="film-details__title-wrap">
                            <h3 class="film-details__title">${movie.film_info.title}</h3>
                            <p class="film-details__title-original">Original: ${movie.film_info.title}</p>
                            </div>

                            <div class="film-details__rating">
                            <p class="film-details__total-rating">${movie.film_info.total_rating}</p>
                        </div>
                    </div>

                    <table class="film-details__table">
                        <tr class="film-details__row">
                            <td class="film-details__term">Director</td>
                            <td class="film-details__cell">${movie.film_info.director}</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Writers</td>
                            <td class="film-details__cell">${movie.film_info.writers.join(' ')}</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Actors</td>
                            <td class="film-details__cell">${movie.film_info.actors.join(' ')}</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Release Date</td>
                            <td class="film-details__cell">${movie.film_info.release.data}</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Runtime</td>
                            <td class="film-details__cell">${Math.floor(runtimeInMinutes / 60)}h ${runtimeInMinutes % 60}m</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Country</td>
                            <td class="film-details__cell">${movie.film_info.release.release_country}</td>
                        </tr>
                        <tr class="film-details__row">
                            <td class="film-details__term">Genres</td>
                            <td class="film-details__cell">
                                ${movie.film_info.genre.map(genre => `<span class="film-details__genre">${genre}</span>`).join(' ')}
                            </td>
                        </tr>   
                    </table>

                    <p class="film-details__film-description">
                    ${movie.film_info.description}
                    </p>
                    </div>
                </div>

                    <section class="film-details__controls">
                        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
                        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
                        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
                    </section>
                </div>

                <div class="film-details__bottom-container">
                    <section class="film-details__comments-wrap">
                        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${movie.comments.length}</span></h3>

                        <ul class="film-details__comments-list">
                            ${movie.comments.map(comment => new CommentsView(comment).template).join(' ')}
                        </ul>

                        <div class="film-details__new-comment">
                            <div class="film-details__add-emoji-label"></div>

                            <label class="film-details__comment-label">
                                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
                            </label>

                            <div class="film-details__emoji-list">
                                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                                <label class="film-details__emoji-label" for="emoji-smile">
                                    <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                                </label>

                                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                                <label class="film-details__emoji-label" for="emoji-sleeping">
                                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                                </label>

                                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                                <label class="film-details__emoji-label" for="emoji-puke">
                                    <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                                </label>

                                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                                <label class="film-details__emoji-label" for="emoji-angry">
                                    <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                                </label>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </section>
    `
}

export default class PopUpView extends AbstractView {
    #movie = null;

    constructor(movie) {
        super();

        this.#movie = movie;
    }

    get template() {
        return createPopUpTemplate(this.#movie);
    }
}