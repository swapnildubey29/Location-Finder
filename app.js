const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes/index')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views','./views')
app.use(cors())

app.use('/', routes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})