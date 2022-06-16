const Mongoose = require("mongoose");

const dbhost = process.env.DBHOST || "tmapp2";
const dbport = process.env.DBPORT || "tDFnU42xoeajGnaU@cluster0.pvbgr.mongodb.net";
const dbname = process.env.DBNAME || "TinMarinApp";

const uri = process.env.DBURI || `mongodb+srv://${dbhost}:${dbport}/${dbname}`;

const connect = async () => {
    try {
        await Mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("DB connection successful");
    } catch (error){
        console.log("Error in DB connection");
        process.exit(1);
    }
};

module.exports = {
    connect
}