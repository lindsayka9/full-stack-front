'use strict'

const petsTemplate = require('./templates/pets-template.handlebars')
const store = require('./store')
const petTemplate = require('./templates/pet-template.handlebars')

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#passwordButton').removeClass('hide')
  $('#sign-out-trigger').removeClass('hide')
  // $('#new-game').removeClass('hide')
  // $('#game').removeClass('hide')
  $('#sign-in').modal('hide')
  $('#message').text('You have successfully signed in!').css('color', 'green')
  $('#sign-in-error').text('')
  $('.crud').removeClass('hide')
  $('#delete-pet').removeClass('hide')
  $('.sign-in-message').addClass('hide')
}

const signInFailure = function () {
  // console.error(error)
  $('#sign-in-error').text('Incorrect Email and/or Password').css('color', 'red')
}

const signUpSuccess = function (data) {
  $('#sign-up-error').text('')
  $('#sign-up').modal('hide')
  $('#message').text('Successfully Signed Up!').css('color', 'green')
}

const signUpFailure = function () {
  // console.error(error)
  $('#sign-up-error').text('Error signing up').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#password-error').text('')
  $('#change-password').modal('hide')
  $('#message').text('Successfully changed password!').css('color', 'green')
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const changePasswordFailure = function () {
  // console.error(error)
  $('#password-error').text('Error changing password').css('color', 'red')
  $('#change-password').find('input:password, input:password, select, textarea').val('')
}

const signOutSuccess = function (data) {
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#passwordButton').addClass('hide')
  $('#sign-out-trigger').addClass('hide')
  // $('#new-game').addClass('hide')
  // $('#games-finished').addClass('hide')
  // $('#game').addClass('hide')
  // $('sign-in-image').removeClass('hide')
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
  $('#sign-in-error').text('')
  $('#password-error').text('')
  $('#sign-up-error').text('')
  $('#create-error').text('')
  $('.crud').addClass('hide')
  $('.sign-in-message').removeClass('hide')
}

const signOutFailure = function (data) {
  $('#message').text('Error signing out').css('color', 'red')
}

const createPetSuccess = function (data) {
  // console.log(data.pets)
  $('#message').text('Pet successfully created!').css('color', 'green')
  $('#create-pet').modal('hide')
}

const createPetFailure = function () {
  $('#create-error').text('Error creating pet').css('color', 'red')
}

const showPetsSuccess = function (data) {
  const petHtml = petsTemplate({ pets: data.pets })
  $('#content').html('')
  $('#content').html(petHtml)
}

const showPetsFailure = function () {
  $('#message').text('Error showing pets').css('color', 'red')
}

const deletePetSuccess = function (id) {
  // console.log(id)
  $('#destroy-pet').modal('hide')
  $('#message').text('Successfully deleted pet!').css('color', 'green')
  $('#content').html('')
}

const deletePetFailure = function () {
  $('#message').text('Error deleting pet').css('color', 'red')
}

const updatePetSuccess = function (data) {
  $('#update-pet').modal('hide')
  $('#message').text('Successfully updated pet!').css('color', 'green')
  $('#content').html('')
}

const updatePetFailure = function () {
  $('#message').text('Error updating pet').css('color', 'red')
}

const showPetSuccess = function (data) {
  // console.log(data)
  const petHtml = petTemplate({ pet: data.pet })
  $('#show-pet').modal('hide')
  $('#content').html(petHtml)
  $('#message').text('Successfully retrieved pet record!').css('color', 'green')
}

const showPetFailure = function () {
  // console.error(error)
  $('#message').text('Error showing pets').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  createPetSuccess,
  createPetFailure,
  showPetsSuccess,
  showPetsFailure,
  deletePetSuccess,
  deletePetFailure,
  updatePetSuccess,
  updatePetFailure,
  showPetSuccess,
  showPetFailure
}
