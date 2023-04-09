const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Inside Mongo Connection, ", process.env.DB_LOCAL_URI)
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    }).catch(err => {
      console.log(
        `MongoDB Database Connection Error: ${err}`
      )
    });
};

module.exports = connectDatabase;
