const express = require('express')
const cors = require('cors')
const app = express()
const port = 820
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/contact-form', (req, res) => {
    console.log(req)
    res.send({success: true})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})