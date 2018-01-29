'use strict'

const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./store')

const onSignIn = function (event) {
  console.log(event.target)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const onSignUp = function (event) {
  console.log(event.target)
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
  // add jquery to UI to display pet info on success
}

const onShowAllPets = function (event) {
  event.preventDefault()
  api.showPets()
    .then(ui.showPetsSuccess)
    .catch(ui.showPetsFailure)
}

const onDeletePet = function (event) {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  api.deletePet(data)
    .then(ui.deletePetSuccess)
    .catch(ui.deletePetFailure)
  $('#destroy-pet-button').trigger('reset')
  $('#content').html('')
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-trigger').on('click', onSignOut)
  $('#create-pet').on('submit', onCreatePet)
  $('#viewAllPetsButton').on('click', onShowAllPets)
  $('#destroy-pet').on('submit', onDeletePet)
  $('#content').on('click', '.remove', onDeletePet)
}

module.exports = {
  addHandlers
}
