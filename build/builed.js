/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/consts.js":
/*!**************************!*\
  !*** ./src/js/consts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGE_RATING": () => (/* binding */ AGE_RATING),
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES),
/* harmony export */   "DESCRIPTION_API_URL": () => (/* binding */ DESCRIPTION_API_URL),
/* harmony export */   "EMOTIONS": () => (/* binding */ EMOTIONS),
/* harmony export */   "FILMS_API_URL": () => (/* binding */ FILMS_API_URL),
/* harmony export */   "MAX_COMMENT_AMOUNT": () => (/* binding */ MAX_COMMENT_AMOUNT)
/* harmony export */ });

// eec614f0
const FILMS_API_URL = 'http://www.omdbapi.com?apikey=eec614f0&s="marvel"';
const DESCRIPTION_API_URL = 'https://jsonplaceholder.typicode.com/posts';

const COUNTRIES = ["USA", "Russia", "England", "France", "Germany", "Japan", "China"];
const EMOTIONS = ["msmile", "sleeping", "puke", "angry"];
const AGE_RATING = ['0+', '6+', '12+', '16+', '18+'];
const MAX_COMMENT_AMOUNT = 15;


/***/ }),

/***/ "./src/js/generate-data.js":
/*!*********************************!*\
  !*** ./src/js/generate-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _randoming_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randoming.js */ "./src/js/randoming.js");
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts.js */ "./src/js/consts.js");
/* harmony import */ var _server_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-api.js */ "./src/js/server-api.js");





function generateFilms(filmsNumber) {
    generateFilms.filmsNumber = filmsNumber;
    generateFilm.usedIds = [];

    return Array.from({ length: filmsNumber }, () => generateFilm())
}

function generateFilm() {
    const newFilm = (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(filmsData);
    return {
        "id": getUniqueId.call(generateFilm, generateFilms.filmsNumber),
        "comments": [],
        "film_info": {
            "title": newFilm.Title,
            "alternative_title": newFilm.imdbID,
            "total_rating": Math.round(Math.random() * 5 * 10) / 10,
            "poster": newFilm.Poster,
            "age_rating": (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.AGE_RATING),
            "director": "Super director",
            "writers": [
                "J.K.Rowling"
            ],
            "actors": [
                "Margan Freeman"
            ],
            "release": {
                "data": `${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1960, 2023)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 31)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 12)}`,
                "release_country": (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(_consts_js__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES),
            },
            "runtime": 77,
            "genre": [
                "Comedy"
            ],
            "description": (0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomElem)(descriptionData),
        },
        "user_details": {
            "watchlist": Boolean(Math.round(Math.random())),
            "aleady_watched": Boolean(Math.round(Math.random())),
            "watching_data": `${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1960, 2023)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 31)}-${(0,_randoming_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 12)}`,
            "favorite": Boolean(Math.round(Math.random()))
        }
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

let filmsData, descriptionData;
(0,_server_api_js__WEBPACK_IMPORTED_MODULE_2__.getFilmsData)((responseFilms, responseDescription) => {
    filmsData = responseFilms.Search;
    descriptionData = responseDescription;
    console.log(generateFilms(10));
});



/***/ }),

/***/ "./src/js/randoming.js":
/*!*****************************!*\
  !*** ./src/js/randoming.js ***!
  \*****************************/
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
    return list[getRandomInt(0, list.length - 1)];
}

// shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

/***/ }),

/***/ "./src/js/server-api.js":
/*!******************************!*\
  !*** ./src/js/server-api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilmsData": () => (/* binding */ getFilmsData)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/js/consts.js");



const fetchFilms = async () => {
    const response = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.FILMS_API_URL);
    const data = await response.json();
    return data;
}

const fetchDescription = async () => {
    const response = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.DESCRIPTION_API_URL);
    const data = [...await response.json()].map(elem => elem.body);
    return data;
}

const getFilmsData = async (onSuccess) => {
    const films = await fetchFilms();
    const description = await fetchDescription();
    onSuccess(films, description);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/webpack.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_generate_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/generate-data.js */ "./src/js/generate-data.js");


})();

/******/ })()
;
//# sourceMappingURL=builed.js.map