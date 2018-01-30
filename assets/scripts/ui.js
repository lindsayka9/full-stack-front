'use strict'

const petsTemplate = require('./templates/pets-template.handlebars')
const store = require('./store')
const petTemplate = require('./templates/pet-template.handlebars')
const ownerTemplate = require('./templates/owner-template.handlebars')
const ownersTemplate = require('./templates/owners-template.handlebars')

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#passwordButton').removeClass('hide')
  $('#signOutButton').removeClass('hide')
  // $('#new-game').removeClass('hide')
  // $('#game').removeClass('hide')
  $('#sign-in').modal('hide')
  $('#message').text('You have successfully signed in!').css('color', 'green')
  $('#sign-in-error').text('')
  $('.crud').removeClass('hide')
  $('#delete-pet').removeClass('hide')
  $('.sign-in-message').addClass('hide')
  $('.photo').addClass('hide')
  $('#content').removeClass('hide')
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
  $('#signOutButton').addClass('hide')
  $('#message').text('Successfully signed out!').css('color', 'green')
  store.user = null
  $('#sign-in-error').text('')
  $('#password-error').text('')
  $('#sign-up-error').text('')
  $('#create-error').text('')
  $('.crud').addClass('hide')
  $('.sign-in-message').removeClass('hide')
  $('.photo').removeClass('hide')
  $('#content').html('')
  $('#content').addClass('hide')
}

const signOutFailure = function (data) {
  $('#message').text('Error signing out').css('color', 'red')
}

const createPetSuccess = function (data) {
  // console.log(data.pets)
  const petHtml = petTemplate({ pet: data.pet })
  $('#message').text('Pet successfully created!').css('color', 'green')
  $('#create-pet').modal('hide')
  $('#content').html(petHtml)
}

const createPetFailure = function () {
  $('#create-error').text('Error creating pet').css('color', 'red')
}

const showPetsSuccess = function (data) {
  $('#message').text('Successfully retrieved pet records!').css('color', 'green')
  const petHtml = petsTemplate({ pets: data.pets })
  $('#content').html('')
  $('#content').html(petHtml)
}

const showPetsFailure = function () {
  $('#view-pet-error').text('Error showing pets').css('color', 'red')
}

const deletePetSuccess = function (id) {
  // console.log(id)
  $('#destroy-pet').modal('hide')
  $('#message').text('Successfully deleted pet!').css('color', 'green')
  $('#content').html('')
}

const deletePetFailure = function () {
  $('#destroy-pet-error').text('Error deleting pet').css('color', 'red')
}

const updatePetSuccess = function (petId, data) {
  $('#update-pet').modal('hide')
  $('#message').text('Successfully updated pet!').css('color', 'green')
  $('#content').html('')
  // console.log(data)
  // console.log(petId.pet)
  const petHtml = petTemplate({ pet: petId.pet })
  $('#content').html(petHtml)
}

const updatePetFailure = function () {
  // console.log(error)
  $('#update-error').text('Error updating pet').css('color', 'red')
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
  $('#view-pet-error').text('Error retrieving record').css('color', 'red')
}

const createOwnerSuccess = function (data) {
  // console.log(data.pets)
  const ownerHtml = ownerTemplate({ owner: data.owner })
  $('#message').text('Owner successfully created!').css('color', 'green')
  $('#create-owner').modal('hide')
  $('#content').html(ownerHtml)
}

const createOwnerFailure = function () {
  $('#create-owner-error').text('Error creating owner').css('color', 'red')
}

const showOwnersSuccess = function (data) {
  $('#message').text('Successfully retrieved owner records!').css('color', 'green')
  const ownerHtml = ownersTemplate({ owners: data.owners })
  $('#content').html('')
  $('#content').html(ownerHtml)
}

const showOwnersFailure = function () {
  $('#message').text('Error showing owners').css('color', 'red')
}

const deleteOwnerSuccess = function (data) {
  // console.log(data)
  $('#destroy-owner').modal('hide')
  $('#message').text('Successfully deleted owner!').css('color', 'green')
  $('#content').html('')
}

const deleteOwnerFailure = function () {
  // console.log(error)
  $('#destroy-owner-error').text('Error deleting owner').css('color', 'red')
}

const updateOwnerSuccess = function (data) {
  $('#update-owner').modal('hide')
  $('#message').text('Successfully updated owner!').css('color', 'green')
  $('#content').html('')
  const ownerHtml = ownerTemplate({ owner: data.owner })
  $('#content').html(ownerHtml)
}

const updateOwnerFailure = function () {
  $('#update-owner-error').text('Error updating owner').css('color', 'red')
}

const showOwnerSuccess = function (data) {
  // console.log(data)
  const ownerHtml = ownerTemplate({ owner: data.owner })
  $('#show-owner').modal('hide')
  $('#content').html(ownerHtml)
  $('#message').text('Successfully retrieved owner record!').css('color', 'green')
}

const showOwnerFailure = function () {
  // console.error(error)
  $('#view-owner-error').text('Error retrieving record').css('color', 'red')
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
  showPetFailure,
  createOwnerSuccess,
  createOwnerFailure,
  showOwnersSuccess,
  showOwnersFailure,
  deleteOwnerSuccess,
  deleteOwnerFailure,
  updateOwnerSuccess,
  updateOwnerFailure,
  showOwnerSuccess,
  showOwnerFailure
}
