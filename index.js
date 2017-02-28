'use strict'

const namae = require('namae')

const nicknames = []

namae.all.forEach(name => {
  const nickname = `${name.toLowerCase()}${namae.lastNameRandom().toLowerCase()}`
  nicknames.push(nickname)
})

const random = () => {
  return `${namae.randomAll().toLowerCase()}${namae.lastNameRandom().toLowerCase()}`
}

exports.all = nicknames
exports.random = random
