import AbstractView from "./abstract-view";
import * as consts from "../consts";

const createCommentTemplate = (comment) => {
    return `
        <li class="film-details__comment">
            <span class="film-details__comment-emoji">
                <img src="${consts.EMOTIONS[comment.emotion]}" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
                <p class="film-details__comment-text">${comment.comment}</p>
                <p class="film-details__comment-info">
                    <span class="film-details__comment-author">${comment.author}</span>
                    <span class="film-details__comment-day">${comment.date}</span>
                    <button class="film-details__comment-delete">Delete</button>
                </p>
            </div>
        </li>
    `;
}

export default class CommentView extends AbstractView {
    #comment = null;

    constructor(comment) {
        super();
        this.#comment = comment;
    }

    get template() {
        return createCommentTemplate(this.#comment);
    }
}
