const { timestreamQuery } = require('./timestreamClient');

const queryData = async () => {
    const params = { QueryString: "SELECT * FROM sampleDB.noor_test where time > ago(0.2h) ORDER BY time DESC" };

    try {
        const result = await timestreamQuery.query(params).promise();
        console.log("Query Result:", JSON.stringify(result, null, 2));
    } catch (err) {
        console.error("Error querying data:", err.message);
    }
};

queryData();
