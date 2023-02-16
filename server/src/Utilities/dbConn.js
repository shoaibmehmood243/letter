const mongoose = require("mongoose");

const dbConn = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(()=> console.log("Database connected successfully."))
        .catch((err)=> console.log(err));
}

module.exports = dbConn;