import * as shell from 'shelljs'

const version = require('../dist/manifest.json').version
const fileName = `check-merge-type-${version}`

shell.mkdir('-p', `packages`)
shell.exec(`zip -9 -r packages/${fileName}.zip dist/*`)
