const { timestreamWrite } = require('./timestreamClient');

const writeData = async () => {
    const params = {
        DatabaseName: "sampleDB",
        TableName: "noor_test",
        Records: [
            {
                Dimensions: [{ Name: "t1", Value: "1" }],
                MeasureName: "temperature",
                MeasureValue: "25",
                MeasureValueType: "DOUBLE",
                Time: Date.now().toString()
            },
            {
                Dimensions: [{ Name: "t1", Value: "11" }],
                MeasureName: "temperature",
                MeasureValue: "25",
                MeasureValueType: "DOUBLE",
                Time: Date.now().toString()
            }
        ]
    };

    try {
        await timestreamWrite.writeRecords(params).promise();
        console.log("Data written successfully.");
    } catch (err) {
        console.error("Error writing data:", err.message);
    }
};

writeData();