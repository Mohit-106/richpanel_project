const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const rateLimit = require('express-rate-limit');

const cors = require("cors");
app.use(cors());
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

app.use('/api', apiLimiter);
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Started at port 3000");
})








