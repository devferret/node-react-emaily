const express = require('express')
const app = express()

// Express path and adjust request, response
app.get('/', (req, res) => {
    res.send({ hello : 'world' })
})

// Dynamic PORT binding
// Define PORT provide from HUROKU or 5000 by default
const PORT = (process.env.PORT || 5000)

// Excute express app
app.listen(PORT)