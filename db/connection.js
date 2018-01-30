const mongoose = require('mongoose')

mongoose.Promise = Promise

// Dev
mongoose.connect('mongodb://localhost/barberhub', { useMongoClient: true })

// // Prod
// if (process.env.NODE_ENV == 'production') {
//   mongoose.connect(process.env.MLAB_URL, { useMongoClient: true })
// } else {
//   mongoose.connect('mongodb://localhost/barberhub', { useMongoClient: true })
// }

module.exports = mongoose