const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

const dataRoutes = require("./routes/dataRoutes");
const configKeys = require("./config/keys");

mongoose
    .connect(configKeys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log("MongoDB sucessfully connected..."))
    .catch(err => console.log(err));


app.use("/api/data", dataRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));