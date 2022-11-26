const Response = require("./common/response");
const { SwapiAxios } = require("./config/swapiaxios");

const getStarWarsCharacters = async (event) => {
    try {
        const response = await SwapiAxios.get("people");
        const formated = response.data.results.map((c) => {
            return {
                nombre: c.name,
                altura: c.height,
                peso:c.mass,
                color_cabello:c.hair_color,
                color_piel:c.skin_color,
                color_ojos:c.eye_color,
                año_nacimiento:c.birth_year,
                genero:c.gender,
                mundo_natal:c.homeworld,
                peliculas:c.films,
                especies:c.species,
                vehiculos:c.vehicles,
                naves:c.starships,
            }
        })
        return Response.OK({ response: formated });
    } catch (error) {
        if (error) {
            console.log("----------ERROR ON GET STARWARS CHARACTERS FUNCTION----------");
            console.log(error);
            return Response.ERROR({ message: "Something go wrong!" });
        }
    }
}

module.exports = {
    getStarWarsCharacters
}