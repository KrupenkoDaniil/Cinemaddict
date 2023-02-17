import * as consts from "../consts.js";


const fetchMovies = async () => {
    const response = await fetch(consts.MOVIES_API_URL);
    return await response.json(); // returning films
}

const fetchDescription = async () => {
    const response = await fetch(consts.DESCRIPTION_API_URL);
    return [...await response.json()].map(elem => elem.body); // returning description
}

const getCommentData = async (onSuccess) => {
    const response = await fetch(consts.COMMENT_API_URL);
    return await response.json(); // returning comment
}

export const getData = async () => {
    const movies = await fetchMovies();
    const description = await fetchDescription();
    const comments = await getCommentData();
    return [movies, description, comments];
}







