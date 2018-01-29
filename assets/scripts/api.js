'use strict'

const config = require('./config')
const store = require('./store')

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createPet = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showPets = function () {
  return $.ajax({
    url: config.apiOrigin + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePet = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + data.pet.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePet = function (petId, data) {
  return $.ajax({
    url: config.apiOrigin + '/pets/' + petId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPet,
  showPets,
  deletePet,
  updatePet
}
