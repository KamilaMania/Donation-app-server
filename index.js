const express = require("express");
const app = express();
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
const port = process.env.PORT || 4000;
const campRouter = require("./camps/router");
const itemRouter = require("./shop/router");

app.use(corsMiddleware);
app.use(bodyParserMiddleware);

app.use(campRouter);
app.use(itemRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
