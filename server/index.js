const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const itemRouter = require("./routes/item.routes")

const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))

app.use("/api/v1/item", itemRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get('dbURL'))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch(e) {

    }
}

start()