import fs from 'fs'


sumFromFile('data/nums.txt') 
    .then(sum => console.log('Sum:', sum)) 
    .catch(err => console.log('Cannot sum:', err))

function sumFromFile(fileName){
    return new Promise((resolve, reject) => {
		fs.readFile(fileName, 'utf8', (err, content) => {
			if (err) reject(err)

			console.log('content:', content)
                
			const lines = content.split('\r\n')
			console.log('Lines:', lines)
			const sum = lines.reduce((sum, num) => sum + parseInt(num), 0)
			resolve(sum)
		})
    })
}

//File content:
// 14
// 25
// 17
// 22
// Lines: [ '14', '25', '17', '22' ]
// Sum: 78