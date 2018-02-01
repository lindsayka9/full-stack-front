
# Full-Stack Project

Deployed Client Site: https://lindsayka9.github.io/full-stack-front/
Deployed API Site: https://floating-meadow-70408.herokuapp.com/

Back-End GitHub Repository: https://github.com/lindsayka9/full-stack-project

This app is designed specifically for veterinarians to manage their clinic's animal patients and their owners.

While logged in the veterinarian or vet staff (user) can create new pets/owners, update or destroy existing pets/owners, and view one or all pets/owners. They are also able to view pets owned by a single owner.

## Planning

When I started the project, I originally wanted this to be used by an entire veterinary clinic with multiple vets, so the user could also manage vets and make appointments between pets and vets.

I created three versions of a viable product for the site:
  Version 1) Single resource to manages pets

  Version 2) Two resources: Manage pets and their owners

  Version 3) Three resources and a join table of appointments: Manage pets, owners, vets, and appointments.


I started by setting up remote repositories and initializing both the front and back end of the app, then worked on the user authentication, before I moved onto the back-end and my pets resource.

I then focused on creating the pets resource, and how it related to the user. Once I had that resource created, I moved to the front-end to write HTML, JavaScript, and jQuery to ensure functionality with all CRUD (Create, Read, Update, Destroy) actions for my pets.

After those functions were in working order, I moved on to styling. I had allotted plenty of time, but finished ahead of schedule, so I added another resource on the back-end: owners.

I started creating the owners back-end the same way, but added a has_many attribute to the owners, and a belongs_to attribute to the pets.

Technologies used: HTML, CSS, Ruby, Rails, JavaScript, jQuery

Link to wireframes: https://imgur.com/a/vumEz

## Unsolved Problems and Next Steps

### Unsolved Problems

I noticed that a user can use an owner ID when creating a pet, of an owner they should not have access to, but cannot view that owner by ID.

### Next Steps

I would like to create a vets resource and appointments table to allow the user to match a pet with a vet, and create appointments between pets and vets.

## User Stories:
- As a user, I want to create a pet with a name, species, age, color, and owner
- As a user, I want to view a single pet
- As a user, I want to view all pets
- As a user, I want to update a pet’s age and owner
- As a user, I want to delete a pet
- As a user, I want to create an owner with first name, last name, and phone number
- As a user, I want to view a single owner
- As a user, I want to view all owners
- As a user, I want to update an owner’s first name, last name, and phone number
- As a user, I want to delete an owner
- As a user, I want to assign a single owner to many pets
- As a user, I want to assign many pets to an owner
