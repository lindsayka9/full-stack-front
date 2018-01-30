'use strict'

const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store')

const onSignIn = function (event) {
  // console.log(event.target)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const onSignUp = function (event) {
  // console.log(event.target)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const onSignOut = function () {
  event.preventDefault()
  $('#message').text('')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreatePet = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createPet(data)
    .then(ui.createPetSuccess)
    .catch(ui.createPetFailure)
  $('#create-pet-button').trigger('reset')
  $('#content').html('')
}

const onShowAllPets = function (event) {
  event.preventDefault()
  api.showPets()
    .then(ui.showPetsSuccess)
    .catch(ui.showPetsFailure)
}

const onShowAPet = function (event) {
  // console.log(event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.showPet(data)
    .then(ui.showPetSuccess)
    .catch(ui.showPetFailure)
  $('#view-pet-button').trigger('reset')
}

const onDeletePet = function (event) {
  event.preventDefault()
  // console.log(event.target)
  const data = getFormFields(event.target)
  api.deletePet(data)
    .then(ui.deletePetSuccess)
    .catch(ui.deletePetFailure)
  $('#destroy-pet-button').trigger('reset')
  $('#content').html('')
}

const onUpdatePet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log(data.pet)
  api.updatePet(data)
    .then(ui.updatePetSuccess)
    .catch(ui.updatePetFailure)
  $('#update-button').trigger('reset')
  $('#content').html('')
}

const onCreateOwner = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createOwner(data)
    .then(ui.createOwnerSuccess)
    .catch(ui.createOwnerFailure)
  $('#create-owner-button').trigger('reset')
  $('#content').html('')
}

const onShowAllOwners = function (event) {
  event.preventDefault()
  api.showOwners()
    .then(ui.showOwnersSuccess)
    .catch(ui.showOwnersFailure)
}

const onShowAOwner = function (event) {
  // console.log(event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.showOwner(data)
    .then(ui.showOwnerSuccess)
    .catch(ui.showOwnerFailure)
  $('#view-owner-button').trigger('reset')
}

const onDeleteOwner = function (event) {
  event.preventDefault()
  // console.log(event.target)
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteOwner(data)
    .then(ui.deleteOwnerSuccess)
    .catch(ui.deleteOwnerFailure)
  $('#destroy-owner-button').trigger('reset')
  $('#content').html('')
}

const onUpdateOwner = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateOwner(data)
    .then(ui.updateOwnerSuccess)
    .catch(ui.updateOwnerFailure)
  $('#update-owner-button').trigger('reset')
  $('#content').html('')
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#signOutButton').on('click', onSignOut)
  $('#create-pet').on('submit', onCreatePet)
  $('#viewAllPetsButton').on('click', onShowAllPets)
  $('#destroy-pet').on('submit', onDeletePet)
  $('#content').on('click', '.remove', onDeletePet)
  $('#update-pet').on('submit', onUpdatePet)
  $('#show-pet').on('submit', onShowAPet)
  $('#create-owner').on('submit', onCreateOwner)
  $('#viewAllOwnersButton').on('click', onShowAllOwners)
  $('#destroy-owner').on('submit', onDeleteOwner)
  $('#content').on('click', '.remove', onDeleteOwner)
  $('#update-owner').on('submit', onUpdateOwner)
  $('#show-owner').on('submit', onShowAOwner)
}

module.exports = {
  addHandlers
}
