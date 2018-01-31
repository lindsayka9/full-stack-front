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
  $('input').prop('required', true)
}

const onSignUp = function (event) {
  // console.log(event.target)
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
  $('input').prop('required', true)
}

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password').find('input:password, input:password, select, textarea').val('')
  $('input').prop('required', true)
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
  $('input').prop('required', true)
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
  $('input').prop('required', true)
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
  $('input').prop('required', true)
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
  $('input').prop('required', true)
}

const onCreateOwner = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createOwner(data)
    .then(ui.createOwnerSuccess)
    .catch(ui.createOwnerFailure)
  $('#create-owner-button').trigger('reset')
  $('#content').html('')
  $('input').prop('required', true)
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
  $('input').prop('required', true)
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
  $('input').prop('required', true)
}

const onUpdateOwner = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateOwner(data)
    .then(ui.updateOwnerSuccess)
    .catch(ui.updateOwnerFailure)
  $('#update-owner-button').trigger('reset')
  $('#content').html('')
  $('input').prop('required', true)
}

const onShowPetsByOwner = function (event) {
  // console.log(event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.showPetsByOwner(data)
    .then(ui.showPetsByOwnerSuccess)
    .catch(ui.showPetsByOwnerFailure)
  $('#view-pets-by-owner-button').trigger('reset')
  $('input').prop('required', true)
}

const onClear = function (event) {
  event.preventDefault()
  $('#content').html('')
  $('#message').text('')
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#signOutButton').on('click', onSignOut)
  $('#create-pet').on('submit', onCreatePet)
  $('#viewAllPetsButton').on('click', onShowAllPets)
  $('#destroy-pet').on('submit', onDeletePet)
  $('#update-pet').on('submit', onUpdatePet)
  $('#show-pet').on('submit', onShowAPet)
  $('#create-owner').on('submit', onCreateOwner)
  $('#viewAllOwnersButton').on('click', onShowAllOwners)
  $('#destroy-owner').on('submit', onDeleteOwner)
  $('#content').on('click', '.remove', onDeleteOwner)
  $('#update-owner').on('submit', onUpdateOwner)
  $('#show-owner').on('submit', onShowAOwner)
  $('#show-pets-by-owner').on('submit', onShowPetsByOwner)
  $('#clear-button').on('click', onClear)
  $('#signUpButton').on('click', function () { $('#sign-up-error').text('') })
  $('#signInButton').on('click', function () { $('#sign-in-error').text('') })
  $('#passwordButton').on('click', function () { $('#password-error').text('') })
  $('#newOwnerButton').on('click', function () { $('#create-owner-error').text('') })
  $('#viewOneOwnerButton').on('click', function () { $('#view-owner-error').text('') })
  $('#updateOwnerButton').on('click', function () { $('#update-owner-error').text('') })
  $('#destroyOwnerButton').on('click', function () { $('#destroy-owner-error').text('') })
  $('#newPetButton').on('click', function () { $('#create-error').text('') })
  $('#viewOnePetButton').on('click', function () { $('#view-pet-error').text('') })
  $('#viewPetsByOwnerButton').on('click', function () { $('#view-pets-by-owner-error').text('') })
  $('#updatePetButton').on('click', function () { $('#update-error').text('') })
  $('#destroyPetButton').on('click', function () { $('#destroy-pet-error').text('') })
}

module.exports = {
  addHandlers
}
