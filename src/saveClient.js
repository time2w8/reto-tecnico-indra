const { v4 } = require("uuid");
const Response = require("./common/response");
const { Tables } = require("./constants/tables")
const { dynamodb } = require("./providers/dynamo")

const saveClient = async (event) => {
    const { firstname, lastname, ocupation } = JSON.parse(event.body);
    const createdAt = new Date();
    const updatedAt = new Date();
    const id = v4();
    if (firstname && lastname && ocupation) {
        const newClient = {
            id,
            firstname,
            lastname,
            ocupation,
            createdAt,
            updatedAt
        }
        try {
            await dynamodb.put({ TableName: Tables.clients, Item: newClient }).promise();
            return Response.OK({ createdClient: newClient });
        } catch (error) {
            if (error) {
                console.log("----------ERROR ON SAVE CLIENT FUNCTION----------");
                console.log(error);
                return Response.ERROR({ message: "Something go wrong!" });
            }
        }
    }
    return Response.ERROR({ message: "Missing atributes on body!" });
}

module.exports = {
    saveClient
}