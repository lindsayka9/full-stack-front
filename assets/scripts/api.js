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

const showPet = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + data.pet.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePet = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pets/' + data.pet.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePet = function (data) {
  // console.log(data)
  // console.log(data.pet)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + data.pet.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data
  })
}

const createOwner = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/owners',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showOwners = function () {
  return $.ajax({
    url: config.apiOrigin + '/owners',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOwner = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/owners/' + data.owner.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOwner = function (data) {
  // console.log(data.owner)
  return $.ajax({
    url: config.apiOrigin + '/owners/' + data.owner.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOwner = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/owners/' + data.owner.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data
  })
}

const showPetsByOwner = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/owners/' + data.owner.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// url: config.apiOrigin + '/games?over=true'

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPet,
  showPets,
  deletePet,
  updatePet,
  showPet,
  createOwner,
  showOwners,
  deleteOwner,
  updateOwner,
  showOwner,
  showPetsByOwner
}
