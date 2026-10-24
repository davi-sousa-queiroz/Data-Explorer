import countries from './data/countries.json' with { type: 'json' }
import animals from './data/animals.json' with { type: 'json' }
import spaceObjects from './data/planets.json' with { type: 'json' }
import gameItems from './data/game-items.json' with { type: 'json' }
import programmingLanguages from './data/programming-languages.json' with { type: 'json' }

const dataContainer = document.querySelector('.data-container')
const countriesTab = document.querySelector('.countries')
const animalsTab = document.querySelector('.animals')
const spaceTab = document.querySelector('.space')
const gamesTab = document.querySelector('.games')
const programmingTab = document.querySelector('.programming')

function clearContainer () {
    dataContainer.replaceChildren()
    dataContainer.classList.remove('country-view')
    dataContainer.classList.remove('animal-view')
    dataContainer.classList.remove('space-view')
    dataContainer.classList.remove('game-view')
    dataContainer.classList.remove('programming-view')
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

function showAnimalData () {
    clearContainer()
    dataContainer.classList.add('animal-view')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.textContent = 'Animals'
    dataContainer.append(heading)

    const animalGrid = document.createElement('div')
    animalGrid.className = 'animal-grid'

    animals.forEach((animal) => {
        const card = document.createElement('article')
        card.className = 'animal-card'

        const name = document.createElement('h2')
        name.className = 'animal-name'
        name.textContent = `${animal.emoji} ${animal.name}`
        card.append(name)

        const details = document.createElement('dl')
        details.className = 'animal-details'

        const fields = [
            ['Scientific name', animal.scientificName],
            ['Type', animal.type],
            ['Habitat', animal.habitat.join(', ')],
            ['Diet', animal.diet],
            ['Lifespan', `${animal.lifespanYears} years`],
            ['Weight', `${animal.weightKg.toLocaleString()} kg`],
            ['Conservation status', animal.isEndangered],
            ['Continents', animal.continent.join(', ')]
        ]

        fields.forEach(([label, value]) => {
            const term = document.createElement('dt')
            term.textContent = label
            const description = document.createElement('dd')
            description.textContent = value
            details.append(term, description)
        })

        card.append(details)
        animalGrid.append(card)
    })

    dataContainer.append(animalGrid)

    const jsonHeading = document.createElement('h2')
    jsonHeading.className = 'raw-json-heading'
    jsonHeading.textContent = 'Raw JSON'

    const jsonCode = document.createElement('pre')
    jsonCode.className = 'raw-json'
    jsonCode.textContent = JSON.stringify(animals, null, 2)

    dataContainer.append(jsonHeading, jsonCode)
}

function showSpaceData () {
    clearContainer()
    dataContainer.classList.add('space-view')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.textContent = 'Space and Planets'
    dataContainer.append(heading)

    const spaceGrid = document.createElement('div')
    spaceGrid.className = 'space-grid'

    spaceObjects.forEach((object) => {
        const card = document.createElement('article')
        card.className = 'space-card'

        const name = document.createElement('h2')
        name.className = 'space-name'
        name.textContent = `${object.emoji} ${object.name}`
        card.append(name)

        const details = document.createElement('dl')
        details.className = 'space-details'

        const fields = [
            ['Type', object.type],
            ['Classification', object.classification],
            [
                'Distance from Sun',
                object.distanceFromSunMillionKm === null
                    ? 'Unknown'
                    : `${object.distanceFromSunMillionKm.toLocaleString()} million km`
            ],
            ['Diameter', `${object.diameterKm.toLocaleString()} km`],
            [
                'Orbital period',
                object.orbitalPeriodDays === null
                    ? 'Not applicable'
                    : `${object.orbitalPeriodDays.toLocaleString()} days`
            ],
            ['Moons', object.moons.toLocaleString()],
            ['Rings', object.hasRings ? 'Yes' : 'No'],
            ['Atmosphere', object.atmosphere],
            ['Fun fact', object.funFact]
        ]

        fields.forEach(([label, value]) => {
            const term = document.createElement('dt')
            term.textContent = label
            const description = document.createElement('dd')
            description.textContent = value
            details.append(term, description)
        })

        card.append(details)
        spaceGrid.append(card)
    })

    dataContainer.append(spaceGrid)

    const jsonHeading = document.createElement('h2')
    jsonHeading.className = 'raw-json-heading'
    jsonHeading.textContent = 'Raw JSON'

    const jsonCode = document.createElement('pre')
    jsonCode.className = 'raw-json'
    jsonCode.textContent = JSON.stringify(spaceObjects, null, 2)

    dataContainer.append(jsonHeading, jsonCode)
}

function showGameItems () {
    clearContainer()
    dataContainer.classList.add('game-view')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.textContent = 'Game Items'
    dataContainer.append(heading)

    const itemGrid = document.createElement('div')
    itemGrid.className = 'item-grid'

    gameItems.forEach((item) => {
        const card = document.createElement('article')
        card.className = 'item-card'

        const name = document.createElement('h2')
        name.className = 'item-name'
        name.textContent = `${item.emoji} ${item.name}`
        card.append(name)

        const details = document.createElement('dl')
        details.className = 'item-details'

        const fields = [
            ['Game', item.game],
            ['Category', item.category],
            ['Rarity', item.rarity],
            ['Level required', item.levelRequired.toLocaleString()],
            ['Value', item.value.toLocaleString()],
            ['Tradable', item.isTradable ? 'Yes' : 'No'],
            ...Object.entries(item.stats).map(([stat, value]) => [
                stat.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase()),
                value.toLocaleString()
            ])
        ]

        fields.forEach(([label, value]) => {
            const term = document.createElement('dt')
            term.textContent = label
            const description = document.createElement('dd')
            description.textContent = value
            details.append(term, description)
        })

        const description = document.createElement('p')
        description.className = 'item-description'
        description.textContent = item.description

        card.append(details, description)
        itemGrid.append(card)
    })

    dataContainer.append(itemGrid)

    const jsonHeading = document.createElement('h2')
    jsonHeading.className = 'raw-json-heading'
    jsonHeading.textContent = 'Raw JSON'

    const jsonCode = document.createElement('pre')
    jsonCode.className = 'raw-json'
    jsonCode.textContent = JSON.stringify(gameItems, null, 2)

    dataContainer.append(jsonHeading, jsonCode)
}

function showProgrammingLanguages () {
    clearContainer()
    dataContainer.classList.add('programming-view')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.textContent = 'Programming Languages'
    dataContainer.append(heading)

    const languageGrid = document.createElement('div')
    languageGrid.className = 'language-grid'

    programmingLanguages.forEach((language) => {
        const card = document.createElement('article')
        card.className = 'language-card'

        const name = document.createElement('h2')
        name.className = 'language-name'
        name.textContent = `${language.logo} ${language.name}`
        card.append(name)

        const details = document.createElement('dl')
        details.className = 'language-details'

        const fields = [
            ['Created', language.yearCreated],
            ['Creator', language.creator],
            ['Paradigms', language.paradigms.join(', ')],
            ['Typing', language.typing],
            ['Difficulty', language.difficulty],
            ['Primary uses', language.primaryUses.join(', ')],
            ['Compiled', language.isCompiled ? 'Yes' : 'No'],
            ['Popularity rank', `#${language.popularityRank}`]
        ]

        fields.forEach(([label, value]) => {
            const term = document.createElement('dt')
            term.textContent = label
            const description = document.createElement('dd')
            description.textContent = value
            details.append(term, description)
        })

        const description = document.createElement('p')
        description.className = 'language-description'
        description.textContent = language.description

        card.append(details, description)
        languageGrid.append(card)
    })

    dataContainer.append(languageGrid)

    const jsonHeading = document.createElement('h2')
    jsonHeading.className = 'raw-json-heading'
    jsonHeading.textContent = 'Raw JSON'

    const jsonCode = document.createElement('pre')
    jsonCode.className = 'raw-json'
    jsonCode.textContent = JSON.stringify(programmingLanguages, null, 2)

    dataContainer.append(jsonHeading, jsonCode)
}

countriesTab.addEventListener('click', showCountryData)
animalsTab.addEventListener('click', showAnimalData)
spaceTab.addEventListener('click', showSpaceData)
gamesTab.addEventListener('click', showGameItems)
programmingTab.addEventListener('click', showProgrammingLanguages)