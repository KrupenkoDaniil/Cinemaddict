import { getRandomElem, getRandomInt, getRandomKey, shuffle } from "./randoming.js";
import * as consts from "../consts.js";
import { getData } from "./server-api.js";

let moviesData, descriptionData, commentsData;
export function generateMovies(moviesNumber) {
    generateMovies.moviesNumber = moviesNumber;
    generateMovies.commentsNumber = moviesNumber * consts.MAX_COMMENT_AMOUNT;
    generateMovies.usedIds = [];
    generateComment.usedIds = [];

    return Array.from({ length: moviesNumber }, () => generateMovie())
}

function generateMovie() {
    const newMovie = getRandomElem(moviesData);
    return {
        id: getUniqueId.call(generateMovie, generateMovies.moviesNumber),
        comments: Array.from({ length: getRandomInt(0, consts.MAX_COMMENT_AMOUNT) }, () => generateComment()),
        film_info: {
            title: newMovie.Title,
            alternative_title: newMovie.imdbID,
            total_rating: Math.round(Math.random() * 5 * 10) / 10,
            poster: newMovie.Poster,
            age_rating: getRandomElem(consts.AGE_RATING),
            director: "Super director",
            writers: [
                "J.K.Rowling"
            ],
            actors: [
                "Margan Freeman"
            ],
            release: {
                "data": `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
                "release_country": getRandomElem(consts.COUNTRIES),
            },
            runtime: getRandomInt(45, 135),
            genre: [
                "Comedy",
                "Drama",
                "History"
            ],
            description: getRandomElem(descriptionData),
        },
        user_details: {
            watchlist: Boolean(Math.round(Math.random())),
            aleady_watched: Boolean(Math.round(Math.random())),
            watching_data: `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
            favorite: Boolean(Math.round(Math.random()))
        }
    }
}

function generateComment() {
    const newComment = commentsData.pop();
    return {
        id: getUniqueId.call(generateComment, generateMovies.commentsNumber),
        author: getRandomElem(consts.USER_NAMES),
        comment: newComment.body,
        date: `${getRandomInt(1960, 2023)}-${getRandomInt(1, 31)}-${getRandomInt(1, 12)}`,
        emotion: getRandomKey(consts.EMOTIONS)
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
export async function getMovies() {
    return new Promise((resolve, reject) => {
        getData()
            .then(response => {
                moviesData = response[0].Search;
                descriptionData = response[1];
                commentsData = response[2];
                resolve();
            });
    })
}


