const express = require("express");
const app = express();
const corsMiddleware = cors();
const bodyParserMiddleware = bodyParser.json();
const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.listen(port, () => console.log(`Server listening on port ${port}`));
