import * as fs from 'fs-extra'
import { resolve as pathResolve } from 'path'

export default function () {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(pathResolve(__dirname, 'actresses.csv'))
      const clean = data.toString().trim().replace(/"/g, '').split('\n')
      const headers = clean.shift().split(',')
      const json = clean.map((row) => {
        const pieces = row.split(',')
        return {
          [headers[0]]: pieces[0],
          [headers[1]]: pieces[1],
          [headers[2]]: pieces[2]

        }
      })
      console.log(json)
      return resolve(json)
    } catch (e) {
      reject(e.message)
    }
  })
}

// Read .csv file
// Convert file buffer toString
// Clean the .csv file (Remove quotes, trim whitepace, split by return and newline)
// pull out headers and clean them / reduce to lowercase
// Loop through remaining rows (after we pull out the header row)
// Clean the row (Remove quotes, split by comma)
// return an object that contains each header and piece of data from row
// Return the array of json