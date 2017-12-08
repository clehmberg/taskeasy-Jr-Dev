import converter from './data/converter'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/converter', (req, res) => {
  return converter()
    .then((data) => {
      return res.json(data)
    })
    .catch((message) => {
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// Read .csv file
// Convert file buffer toString
// Clean the .csv file (Remove quotes, trim whitepace, split by return and newline)
// pull out headers and clean them / reduce to lowercase
// Loop through remaining rows (after we pull out the header row)
// Clean the row (Remove quotes, split by comma)
// return an object that contains each header and piece of data from row