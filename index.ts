import { parse } from 'json2csv'
import * as fs from 'fs'
import { data } from './data'

// console.log('data', data)
const convertData = []
for(let i = 0; i < data.length; i++) {
    convertData.push(data[i]._source)
  }
const csv = parse(convertData)

fs.writeFileSync('data.csv', csv)