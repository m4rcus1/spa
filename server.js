const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "main", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "main", "index.html"));
});

app.listen(process.env.PORT || 2712, () => console.log("Server running..."));