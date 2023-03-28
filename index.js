const express = require('express')
const path = require('path')
const app = express()

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'about.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
