const express = require('express')
const app = express()
require('dotenv').config()
const connectdb = require("./db/connect")

app.use(express.json({
    extended: false
}))

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))
const port = 3000

const start = async () => {
    try {
        await connectdb(process.env.MOGNO_URI)
        app.listen(port, () => {
            console.log(`server is listning from ${port}`)
        })

    }
    catch (err) {
        console.log(err)
    }
}
start()

