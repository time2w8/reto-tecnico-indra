const Response = require("./common/response");
const { Tables } = require("./constants/tables")
const { dynamodb } = require("./providers/dynamo")


const getClients = async (event) => {
    try {
        const response = await dynamodb.scan({ TableName: Tables.clients }).promise();
        const clients = response.Items;
        return Response.OK({ clients });
    } catch (error) {
        if (error) {
            console.log("----------ERROR ON GETCLIENTS FUNCTION----------");
            console.log(error);
            return Response.ERROR({ message: "Something go wrong!" });
        }
    }
}

module.exports = {
    getClients
}