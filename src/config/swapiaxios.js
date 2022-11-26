const axios = require("axios").default;

const SwapiAxios = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 20000,
    headers: {
        Accept: "application/json",
    },
})

module.exports = {
    SwapiAxios,
};