import * as objects from './objects'
import * as documents from './documents'
import * as singletons from './singletons'

const schemaTypes = [
    ...Object.values(objects),
    ...Object.values(documents),
    ...Object.values(singletons),
]

export default schemaTypes