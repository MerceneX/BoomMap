const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require("cors");

const dataRoutes = require("./routes/dataRoutes");
const graphRoutes = require("./routes/graphRoutes");
const database = require("./config/database")


app.use(cors());

app.use("/api/data", dataRoutes);
app.use("/api/graph", graphRoutes);

const port = process.env.PORT || 5000;
database.connect((err)=>{
    if(err) {
        console.log("Unable to connect database");
        process.exit(1);
    }else{
        console.log("Connected to database")
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
});

