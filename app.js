const express = require("express");
const app = express();
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

app.listen(3000, function () {
    console.log("server started at port 3000");
})








