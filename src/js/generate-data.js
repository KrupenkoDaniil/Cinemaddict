import { getRandomElem, getRandomInt, shuffle } from "./randoming.js";
import * as consts from "./consts.js";
import { getData } from "./server-api.js";


function generateFilms(filmsNumber) {
    generateFilms.filmsNumber = filmsNumber;
    generateFilms.commentsNumber = filmsNumber * consts.MAX_COMMENT_AMOUNT;
    generateFilm.usedIds = [];
    generateComment.usedIds = [];

    return Array.from({ length: filmsNumber }, () => generateFilm())
}

function generateFilm() {
    const newFilm = getRandomElem(filmsData);
    return {
        "id": getUniqueId.call(generateFilm, generateFilms.filmsNumber),
        "comments": Array.from({ length: consts.MAX_COMMENT_AMOUNT }, () => generateComment()),
        "film_info": {
            "title": newFilm.Title,
            "alternative_title": newFilm.imdbID,
            "total_rating": Math.round(Math.random() * 5 * 10) / 10,
            "poster": newFilm.Poster,
            "age_rating": getRandomElem(consts.AGE_RATING),
            "director": "Super director",
            "writers": [
                "J.K.Rowling"
            ],
            "actors": [
                "Margan Freeman"
            ],
            "release": {
                "data": `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
                "release_country": getRandomElem(consts.COUNTRIES),
            },
            "runtime": 77,
            "genre": [
                "Comedy"
            ],
            "description": getRandomElem(descriptionData),
        },
        "user_details": {
            "watchlist": Boolean(Math.round(Math.random())),
            "aleady_watched": Boolean(Math.round(Math.random())),
            "watching_data": `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
            "favorite": Boolean(Math.round(Math.random()))
        }
    }
}

function generateComment() {
    const newComment = commentsData.pop();
    return {
        "id": getUniqueId.call(generateComment, generateFilms.commentsNumber),
        "author": getRandomElem(consts.USER_NAMES),
        "commnet": newComment.body,
        "date": `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
        "emotion": getRandomElem(consts.EMOTIONS)
    }
}

function getUniqueId(maxId) {
    // Static var immitation
    if (this.usedIds === undefined) {
        this.usedIds = [];
    }

    // // Generate new id
    let nextId;
    do {
        nextId = getRandomInt(0, maxId);
    } while (this.usedIds.includes(nextId));
    this.usedIds.push(nextId);

    return nextId;
}

let filmsData, descriptionData, commentsData;
getData((responseFilms, responseDescription, responseComment) => {
    filmsData = responseFilms.Search;
    descriptionData = responseDescription;
    commentsData = shuffle(responseComment);
    console.log(generateFilms(10));
});

