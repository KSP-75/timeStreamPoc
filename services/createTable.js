const { timestreamWrite } = require('./timestreamClient');

const createTable = async () => {
    const params = {
        DatabaseName: "sampleDB",
        TableName: "noor_test",
        RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: "24",
            MagneticStoreRetentionPeriodInDays: "7"
        }
    };
    try {
        await timestreamWrite.createTable(params).promise();
        console.log("Table created successfully.");
    } catch (err) {
        console.error("Error creating table:", err.message);
    }
};

createTable();

