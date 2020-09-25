import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([11, 8, 10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('ASDAdasdasdVvfsd')
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
