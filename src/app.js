const express = require("express");
const cors = require("cors");
const fs = require("node:fs/promises");
const dayjs = require("dayjs");

//Creación de al app
const app = express();
app.use(express.json());
app.use(cors());

//Middlewares
/*app.use((req, res, next) => {
    if (!req.headers["authorization"]) {
        return res.send("No tienes acceso");
    }
    next();
});*/

app.use(async (req, res, next) => {
    const currentDate = dayjs().format("DD-MM-YYYY HH:mm.ss");
    const data = `[${currentDate}] Método: ${req.method}. Url: ${req.url}\n`;

    await fs.appendFile("./main.log", data);

    next();
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: err.message});
});

// Route configuration
app.use("/api", require("./routes/api"));

module.exports = app;
