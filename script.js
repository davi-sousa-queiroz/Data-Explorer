import countries from './data/countries.json' with { type: 'json' }

const dataContainer = document.querySelector('.data-container')
const countriesTab = document.querySelector('.countries')
const animalsTab = document.querySelector('.animals')
const spaceTab = document.querySelector('.space')
const gamesTab = document.querySelector('.games')
const programmingTab = document.querySelector('.programming')

function clearContainer () {
    dataContainer.replaceChildren()
    dataContainer.classList.remove('country-view')
}

function showCountryData () {
    clearContainer()
    dataContainer.classList.add('country-view')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.textContent = 'Countries'
    dataContainer.append(heading)

    const countryGrid = document.createElement('div')
    countryGrid.className = 'country-grid'

    countries.forEach((country) => {
        const card = document.createElement('article')
        card.className = 'country-card'

        const name = document.createElement('h2')
        name.className = 'country-name'
        name.textContent = `${country.flag} ${country.name}`
        card.append(name)

        const details = document.createElement('dl')
        details.className = 'country-details'

        const fields = [
            ['Capital', country.capital],
            ['Continent', country.continent],
            ['Population', country.population.toLocaleString()],
            ['Area', `${country.areaKm2.toLocaleString()} km²`],
            ['Languages', country.languages.join(', ')],
            ['Currency', `${country.currency.name} (${country.currency.code})`]
        ]

        fields.forEach(([label, value]) => {
            const term = document.createElement('dt')
            term.textContent = label
            const description = document.createElement('dd')
            description.textContent = value
            details.append(term, description)
        })

        card.append(details)
        countryGrid.append(card)
    })

    dataContainer.append(countryGrid)

    const jsonHeading = document.createElement('h2')
    jsonHeading.className = 'raw-json-heading'
    jsonHeading.textContent = 'Raw JSON'

    const jsonCode = document.createElement('pre')
    jsonCode.className = 'raw-json'
    jsonCode.textContent = JSON.stringify(countries, null, 2)

    dataContainer.append(jsonHeading, jsonCode)
}

countriesTab.addEventListener('click', showCountryData)