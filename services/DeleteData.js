const { timestreamWrite } = require('./timestreamClient');

const deleteTable = async () => {
    const params = { DatabaseName: "MyTimestreamDB", TableName: "MyTimestreamTable" };
    try {
        await timestreamWrite.deleteTable(params).promise();
        console.log("Table deleted successfully.");
    } catch (err) {
        console.error("Error deleting table:", err.message);
    }
};

deleteTable();
