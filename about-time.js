
import fs from 'fs'
import ms from 'ms'

aboutTime()
function aboutTime() {
    fs.readFile('data/timestamps.txt', 'utf8', (err, contents) => {
    if (err) return console.log('Cannot read file')
    const timestamps = contents.split('\r\n')  
    timestamps.forEach(timestamp => console.log(ms(+timestamp, { long: true })))
    })
    console.log('after calling readFile')
    }

//after calling readFile
// 6 seconds
// 12 seconds
// -23 seconds


