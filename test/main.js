const context = require.context('.', true, /.+Test\.ts$/)

context.keys().forEach(context)

module.exports = context
