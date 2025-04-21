import fs from 'fs'
import fr from 'follow-redirects'

const { http, https } = fr

export const utilService = {
	httpGet,
	readJsonFile,
	download,
 
}

function download(url, fileName) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(fileName)
		https.get(url, content => {
			content.pipe(file)
			file.on('error', reject)
			file.on('finish', () => {
				file.close()
				resolve()
			})
		})
	})
}

// inside util.service:
function httpGet(url) {
	const protocol = url.startsWith('https') ? https : http
	const options = {
		method: 'GET',
	}
	return new Promise((resolve, reject) => {
		const req = protocol.request(url, options, res => {
			let data = ''

			res.on('data', chunk => {
				data += chunk
			})

			res.on('end', () => {
				resolve(data)
			})
		})
		req.on('error', err => {
			reject(err)
		})
		req.end()
	})
}

function readJsonFile(path) {
	const json = fs.readFileSync(path, 'utf8')
	return JSON.parse(json)
}

