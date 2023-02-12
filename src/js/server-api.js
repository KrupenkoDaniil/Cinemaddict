import * as consts from "./consts.js";


const fetchFilms = async () => {
    const response = await fetch(consts.FILMS_API_URL);
    const data = await response.json();
    return data;
}

const fetchDescription = async () => {
    const response = await fetch(consts.DESCRIPTION_API_URL);
    const data = [...await response.json()].map(elem => elem.body);
    return data;
}

const getCommentData = async (onSuccess) => {
    const response = await fetch(consts.COMMENT_API_URL);
    const data = await response.json();
    return data;
}

export const getData = async (onSuccess) => {
    const films = await fetchFilms();
    const description = await fetchDescription();
    const comments = await getCommentData();
    onSuccess(films, description, comments);
}







