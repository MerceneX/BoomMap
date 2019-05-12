const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB sucessfully connected..."))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));