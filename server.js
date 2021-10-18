const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API running");
});

app.listen(port, () => console.log(`Backend Server running on Port ${port}`));
