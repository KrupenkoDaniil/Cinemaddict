/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGE_RATING": () => (/* binding */ AGE_RATING),
/* harmony export */   "COMMENT_API_URL": () => (/* binding */ COMMENT_API_URL),
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES),
/* harmony export */   "DESCRIPTION_API_URL": () => (/* binding */ DESCRIPTION_API_URL),
/* harmony export */   "EMOTIONS": () => (/* binding */ EMOTIONS),
/* harmony export */   "MAX_COMMENT_AMOUNT": () => (/* binding */ MAX_COMMENT_AMOUNT),
/* harmony export */   "MIN_MOVIES_AMOUNT": () => (/* binding */ MIN_MOVIES_AMOUNT),
/* harmony export */   "MOVIES_API_URL": () => (/* binding */ MOVIES_API_URL),
/* harmony export */   "USER_NAMES": () => (/* binding */ USER_NAMES)
/* harmony export */ });

// eec614f0
const MOVIES_API_URL = 'http://www.omdbapi.com?apikey=eec614f0&s="marvel"';
const DESCRIPTION_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENT_API_URL = 'https://jsonplaceholder.typicode.com/comments';

const USER_NAMES = ["Sarah Rodriguez", "Jill Washington", "Peter Mills", "Chad Howard", "Arlene Perez"];
const COUNTRIES = ["USA", "Russia", "England", "France", "Germany", "Japan", "China"];
const EMOTIONS = {
    "smile": "./images/emoji/smile.png",
    "sleeping": "./images/emoji/sleeping.png",
    "puke": "./images/emoji/puke.png",
    "angry": "./images/emoji/angry.png"
}
const AGE_RATING = ['0+', '6+', '12+', '16+', '18+'];
const MIN_MOVIES_AMOUNT = 5;
const MAX_COMMENT_AMOUNT = 15;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _mock_generate_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/generate-data */ "./src/mock/generate-data.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_header_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/header-view */ "./src/view/header-view.js");
/* harmony import */ var _view_menu_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/menu-view */ "./src/view/menu-view.js");
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_movies_list_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/movies-list-view */ "./src/view/movies-list-view.js");
/* harmony import */ var _view_footer_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/footer-view */ "./src/view/footer-view.js");
/* harmony import */ var _modules_show_movies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/show-movies */ "./src/modules/show-movies.js");
/* harmony import */ var _modules_key_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/key-events */ "./src/modules/key-events.js");
/* harmony import */ var _modules_show_popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/show-popup */ "./src/modules/show-popup.js");












const init = (movies) => {
    init.movies = movies;
    init.moviesAmount = movies.length;

    // Render Header
    const headerContainer = document.querySelector('.header');
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTemplate)(headerContainer, (0,_view_header_view__WEBPACK_IMPORTED_MODULE_3__.createHeaderTemplate)(), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

    // Render Main Section
    const mainContainer = document.querySelector('.main');

    // Set PopUp
    mainContainer.addEventListener('click', _modules_show_popup__WEBPACK_IMPORTED_MODULE_10__.showPopUp);

    // Render Menu
    const watchList = movies.filter(movie => movie.user_details.watchlist);
    const browsingHistory = movies.filter(movie => movie.user_details.aleady_watched);
    const favoritesList = movies.filter(movie => movie.user_details.favorite); //TODO: deal with it someday!

    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTemplate)(mainContainer, (0,_view_menu_view__WEBPACK_IMPORTED_MODULE_4__.createMenuTemplate)(watchList.length, browsingHistory.length, favoritesList.length), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

    // Render Sort
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTemplate)(mainContainer, (0,_view_sort_view__WEBPACK_IMPORTED_MODULE_5__.createSortTemplate)(), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

    // Render Movies List
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTemplate)(mainContainer, (0,_view_movies_list_view__WEBPACK_IMPORTED_MODULE_6__.createMoviesListTemplate)(init.moviesAmount), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);

    if (init.moviesAmount) {
        const moviesContainer = mainContainer.querySelector('.films-list__container');

        const showMoreButton = mainContainer.querySelector('.films-list__show-more');
        showMoreButton.addEventListener('click', () => {
            (0,_modules_show_movies__WEBPACK_IMPORTED_MODULE_8__.showMovies)(moviesContainer, init.movies);

            if (_modules_show_movies__WEBPACK_IMPORTED_MODULE_8__.showMovies.movies.length <= 0) {
                showMoreButton.style.display = 'none';
            }
        });
        showMoreButton.click();
    }

    // Render Footer
    const footerContainer = document.querySelector('.footer__statistics');
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderTemplate)(footerContainer, (0,_view_footer_view__WEBPACK_IMPORTED_MODULE_7__.createFooterTemplate)(init.moviesAmount), _render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
}

;(0,_mock_generate_data__WEBPACK_IMPORTED_MODULE_1__.getMovies)().then(() => {
    const generatedMovies = (0,_mock_generate_data__WEBPACK_IMPORTED_MODULE_1__.generateMovies)(10);
    (0,_modules_key_events__WEBPACK_IMPORTED_MODULE_9__.setKeyEvents)();
    init(generatedMovies);
});




/***/ }),

/***/ "./src/mock/generate-data.js":
/*!***********************************!*\
  !*** ./src/mock/generate-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMovies": () => (/* binding */ generateMovies),
/* harmony export */   "getMovies": () => (/* binding */ getMovies)
/* harmony export */ });
/* harmony import */ var _randoming_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randoming.js */ "./src/mock/randoming.js");
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");
/* harmony import */ var _server_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-api.js */ "./src/mock/server-api.js");




let moviesData, descriptionData, commentsData;
function generateMovies(moviesNumber) {
    generateMovies.moviesNumber = moviesNumber;
    generateMovies.commentsNumber = moviesNumber * _consts_js__WEBPACK_IMPORTED_MODULE_1__.MAX_COMMENT_AMOUNT;
    generateMovies.usedIds = [];
    generateComment.usedIds = [];

    return Array.from({ length: moviesNumber }, () => generateMovie())
}

function generateMovie() {
    const newMovie = (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(moviesData);
    return {
        id: getUniqueId.call(generateMovie, generateMovies.moviesNumber),
        comments: Array.from({ length: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, _consts_js__WEBPACK_IMPORTED_MODULE_1__.MAX_COMMENT_AMOUNT) }, () => generateComment()),
        film_info: {
            title: newMovie.Title,
            alternative_title: newMovie.imdbID,
            total_rating: Math.round(Math.random() * 5 * 10) / 10,
            poster: newMovie.Poster,
            age_rating: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.AGE_RATING),
            director: "Super director",
            writers: [
                "J.K.Rowling"
            ],
            actors: [
                "Margan Freeman"
            ],
            release: {
                "data": `${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1960, 2023)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 31)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 12)}`,
                "release_country": (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES),
            },
            runtime: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(45, 135),
            genre: [
                "Comedy",
                "Drama",
                "History"
            ],
            description: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(descriptionData),
        },
        user_details: {
            watchlist: Boolean(Math.round(Math.random())),
            aleady_watched: Boolean(Math.round(Math.random())),
            watching_data: `${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1960, 2023)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 31)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 12)}`,
            favorite: Boolean(Math.round(Math.random()))
        }
    }
}

function generateComment() {
    const newComment = commentsData.pop();
    return {
        id: getUniqueId.call(generateComment, generateMovies.commentsNumber),
        author: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.USER_NAMES),
        comment: newComment.body,
        date: `${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1960, 2023)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 31)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 12)}`,
        emotion: (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomKey)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.EMOTIONS)
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
        nextId = (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, maxId);
    } while (this.usedIds.includes(nextId));
    this.usedIds.push(nextId);

    return nextId;
}
async function getMovies() {
    return new Promise((resolve, reject) => {
        (0,_server_api_js__WEBPACK_IMPORTED_MODULE_2__.getData)()
            .then(response => {
                moviesData = response[0].Search;
                descriptionData = response[1];
                commentsData = response[2];
                resolve();
            });
    })
}




/***/ }),

/***/ "./src/mock/randoming.js":
/*!*******************************!*\
  !*** ./src/mock/randoming.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomElem": () => (/* binding */ getRandomElem),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandomKey": () => (/* binding */ getRandomKey),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
// random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

// get random number
function getRandomElem(list) {
    if (list.length) {
        return list[getRandomInt(0, list.length - 1)];
    };
};

// get random key
function getRandomKey(dic) {
    const list = [];
    for (let key in dic) {
        list.push(key);
    };
    return getRandomElem(list);
}

// shuffle an array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/***/ }),

/***/ "./src/mock/server-api.js":
/*!********************************!*\
  !*** ./src/mock/server-api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");



const fetchMovies = async () => {
    const response = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.MOVIES_API_URL);
    return await response.json(); // returning films
}

const fetchDescription = async () => {
    const response = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.DESCRIPTION_API_URL);
    return [...await response.json()].map(elem => elem.body); // returning description
}

const getCommentData = async (onSuccess) => {
    const response = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT_API_URL);
    return await response.json(); // returning comment
}

const getData = async () => {
    const movies = await fetchMovies();
    const description = await fetchDescription();
    const comments = await getCommentData();
    return [movies, description, comments];
}









/***/ }),

/***/ "./src/modules/key-events.js":
/*!***********************************!*\
  !*** ./src/modules/key-events.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setKeyEvents": () => (/* binding */ setKeyEvents)
/* harmony export */ });
const setKeyEvents = () => {
    document.addEventListener('keydown', (event) => {

        // Remove PopUp
        const popUp = document.body.querySelector('.film-details');
        if (event.code == "Escape" && popUp) {
            document.body.removeChild(popUp);
        }
    });
}

/***/ }),

/***/ "./src/modules/show-movies.js":
/*!************************************!*\
  !*** ./src/modules/show-movies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMovies": () => (/* binding */ showMovies)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _view_movie_card_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/movie-card-view */ "./src/view/movie-card-view.js");




const showMovies = (container, movies) => {
    if (showMovies.movies === undefined) {
        showMovies.movies = [...movies];
    }
    let loopNumber = _consts__WEBPACK_IMPORTED_MODULE_0__.MIN_MOVIES_AMOUNT;
    if (showMovies.movies.length < loopNumber) {
        loopNumber = showMovies.movies.length;
    }
    for (let i = 0; i < loopNumber; i++) {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTemplate)(container, (0,_view_movie_card_view__WEBPACK_IMPORTED_MODULE_2__.createMovieCardTemplate)(showMovies.movies.pop()), _render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
    }
}

/***/ }),

/***/ "./src/modules/show-popup.js":
/*!***********************************!*\
  !*** ./src/modules/show-popup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showPopUp": () => (/* binding */ showPopUp)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _view_popup_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/popup-view */ "./src/view/popup-view.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ "./src/main.js");




const showPopUp = (event) => {
    const eventTarget = event.target.closest('.film-card');
    if (eventTarget) {
        // Remove remain PopUp
        let popUp = document.body.querySelector('.film-details');
        popUp ? document.body.removeChild(popUp) : null;


        const targetMovie = _main__WEBPACK_IMPORTED_MODULE_2__.init.movies.filter(movie => movie.id === +eventTarget.id)[0];
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(document.body, (0,_view_popup_view__WEBPACK_IMPORTED_MODULE_1__.createPopUpTemplate)(targetMovie), _render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
        // Set PopUp removing
        popUp = document.body.querySelector('.film-details');
        const popUpCloseButton = popUp.querySelector('.film-details__close-btn');
        popUpCloseButton.addEventListener('click', () => document.body.removeChild(popUp));
    }
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend'
};

const renderTemplate = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

/***/ }),

/***/ "./src/view/comment-view.js":
/*!**********************************!*\
  !*** ./src/view/comment-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommentTemplate": () => (/* binding */ createCommentTemplate)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");


const createCommentTemplate = (comment) => {
    return `
            <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                <img src="${_consts__WEBPACK_IMPORTED_MODULE_0__.EMOTIONS[comment.emotion]}" width="55" height="55" alt="emoji-smile">
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
    `
}

/***/ }),

/***/ "./src/view/footer-view.js":
/*!*********************************!*\
  !*** ./src/view/footer-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooterTemplate": () => (/* binding */ createFooterTemplate)
/* harmony export */ });
const createFooterTemplate = (moviesAmount) => {

    return `
        <p>${moviesAmount} ${moviesAmount > 1 ? 'movies' : 'movie'} inside</p>
    `;
}

/***/ }),

/***/ "./src/view/header-view.js":
/*!*********************************!*\
  !*** ./src/view/header-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeaderTemplate": () => (/* binding */ createHeaderTemplate)
/* harmony export */ });

const createHeaderTemplate = () => {
    return `
        <h1 class="header__logo logo">Cinemaddict</h1>

        <section class="header__profile profile">
            <p class="profile__rating">Movie Buff</p>
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>
    `;
};

/***/ }),

/***/ "./src/view/menu-view.js":
/*!*******************************!*\
  !*** ./src/view/menu-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuTemplate": () => (/* binding */ createMenuTemplate)
/* harmony export */ });
const createMenuTemplate = (watchlistAmount, browsingHistoryAmount, favoritesAmount) => {
    return `
        <nav class="main-navigation">
            <div class="main-navigation__items">
            <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
            <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlistAmount}</span></a>
            <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${browsingHistoryAmount}</span></a>
            <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesAmount}</span></a>
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>
    `;
}

/***/ }),

/***/ "./src/view/movie-card-view.js":
/*!*************************************!*\
  !*** ./src/view/movie-card-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMovieCardTemplate": () => (/* binding */ createMovieCardTemplate)
/* harmony export */ });
const createMovieCardTemplate = (movie) => {
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

/***/ }),

/***/ "./src/view/movies-list-view.js":
/*!**************************************!*\
  !*** ./src/view/movies-list-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMoviesListTemplate": () => (/* binding */ createMoviesListTemplate)
/* harmony export */ });
const createMoviesListTemplate = (moviesAmount) => {
    return `
        <section class="films">
            <section class="films-list">
            <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

            ${moviesAmount ? `
            <div class="films-list__container">
            </div>

            <button class="films-list__show-more">Show more</button>
            </section>
            `: `
                <h2 class="films-list__title">There are no movies in our database</h2>
            ` }
            
        </section>
    `;
}

/***/ }),

/***/ "./src/view/popup-view.js":
/*!********************************!*\
  !*** ./src/view/popup-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopUpTemplate": () => (/* binding */ createPopUpTemplate)
/* harmony export */ });
/* harmony import */ var _comment_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-view */ "./src/view/comment-view.js");


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
                        ${movie.comments.map(comment => (0,_comment_view__WEBPACK_IMPORTED_MODULE_0__.createCommentTemplate)(comment)).join(' ')}
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

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSortTemplate": () => (/* binding */ createSortTemplate)
/* harmony export */ });
const createSortTemplate = () => {
    return `
        <ul class="sort">
            <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
            <li><a href="#" class="sort__button">Sort by date</a></li>
            <li><a href="#" class="sort__button">Sort by rating</a></li>
        </ul>
    `;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=builded.js.map