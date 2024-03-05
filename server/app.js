const express = require("express")

const app = express()

const errorMiddleware = require("./middlewares/error")

app.use(express.json())

// route imports
const product = require("./routes/productRoute")
app.use("/api/v1", product)

// middleware to handle errors
app.use(errorMiddleware)

module.exports = app