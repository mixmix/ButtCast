const startSSB = require('./ssb')
const startAPI = require('./api')

const ssb = startSSB({
  path: '/tmp/butt-cast'
  // needed to get pkg complainin about dynamic mkdirp?
})

const port = 3000
startAPI(ssb, port)

console.log(`API running on http://localhost:${port}/`)
