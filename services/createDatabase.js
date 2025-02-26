
const {timestreamWrite} = require('./timestreamClient');

const createDatabase = async()=>{
    const params = {DatabaseName : "MyTimeStreamDB"};
    try{
        await timestreamWrite.createDatabase(params).promise();
        console.log("Databse created successfully.");
    }
    catch(err){
        console.log("error in creating database" , err.message);
    }
};

createDatabase();