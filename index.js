const express = require("express");
const app = express();
//const corsMiddleware = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
const port = process.env.PORT || 4000;
const campRouter = require("./camps/router");

//app.use(corsMiddleware);
app.use(bodyParserMiddleware);

app.use(campRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
