
import fs from 'fs'

demoSync()

function demoSync() {
const contents = fs.readFileSync('data/data.txt', 'utf8')
console.log(contents)
}

