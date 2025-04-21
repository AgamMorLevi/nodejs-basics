import fs from 'fs'
import { utilService } from './services/util.service.js'


downloadCountryFlags()

function downloadCountryFlags() {
 const countries = getCountries()
 console.log('Countries:', countries.map(c => c.name))

 downloadFlags(countries)
 .then(() => {
 console.log('Your flags are ready')
 })
}

// TODO: get the countries from the JSON file with utilService.readJsonFile
// sort by population (descending)
// return the top 5

function getCountries() {
var countries = utilService.readJsonFile('./data/countries.json')
countries.sort((c1, c2) => c2.population - c1.population)
var topFive = countries.slice(0,5)
console.log(topFive)
return topFive
}


function downloadFlags(countries) {
    const downloadDir = './flags'
    if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir)

	const prms = countries.map(country => 
		utilService.download(country.flags.svg, `flags/${country.name.common}.svg`))
        
	return Promise.all(prms)
}
