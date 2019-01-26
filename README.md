# Tatu App by Ink Inc.

## Overview
An app that allows users to search for tattoos and tattoo artists based on certain criteria and tags (style and placement on the body) and returns images and details of the tattoo that meet the user’s criteria.

## Why is this app needed?
The need for this app is based on personal experience in trying to find an artist that does a particular type of tattoo, and there is no consistence resource (and most tattoo parlors websites lack detail and functionality).

## Video Demos
- [Customer/Regular User Account Creation, Landing page, and Search Functionality](https://drive.google.com/file/d/1_47KFfbywE5QzIDSprN9gYqp6aCiRBTe/view?usp=sharing)
- [Tattoo Artist Account Creation, Landing Page, Add Photo and Edit Profile Functionality](https://drive.google.com/file/d/1LYh8AjftOwv-AYl6SwVV3M26d5OF6Qcu/view?usp=sharing)
- [Existing user signing into to an existing account](https://drive.google.com/file/d/1DwgvA4fif10i4zKOHbIXoO1EdubJvMUB/view?usp=sharing)

## Regular User Flow and Functionality
- As a customer looking for specific types of tattoos or even just looking to see what kinds of tattoos are out there, our app allows new users to create an account login information* (using the Create Account Button and corresponding form on the Home Page) and then search our database of artist's that have accounts on Tatu (and have uploaded images). We have an extensive list of both styles and body placement options that users can use to narrow down their search.
- When their page first loads they are presented with all Tattoo Images and Cards that are in our Database, which allows them to fully browse all styles and placement before choosing to narrow it down using the search feature.
- Once they are done, they can hit the logout button in the Nav bar and are directed back the Home page.
- *Note: User's passwords are encrypted before being stored in our database, for our user's security.

## Tattoo Artist Flow and Functionality
- As a tattoo artist, I want to be able to have a location dedicated to me and my art work, and be a conduit for users to connect with artists. Tatu allows tattoo artists to create an account and login information* (using the Create Account Button and corresponding form on the Home Page), upload images and details of their work to their account, that will then be shared with our broader user base.
- Tattoo artists can use the add photo modal/form (button found in the lower right corner) to add images to our database that will the display in their gallery and to our user's search results and default galleries.
- Artists can also edit their information in the Edit Profile modal/form (button found in the lower right corner) if any of their information changes. This will update our datbase, and in turn updates the details found on the images they have in their and the user's galleries.
- Once they are done, they can hit the logout button in the Nav bar and are directed back the Home page.
- *Note: User's passwords are encrypted before being stored in our database, for our user's security.

## Future Enhancements

- User Page:
     * Improve default gallery view to include categories of each style, that if the header is clicked then displays the cards with more details for each image found in that category.
     * Allows users to save cards to their profile of tattoos they like/are interested in.
     * Add a link in each card to go direclty to that tattoo artist profile page to view all of their images and/or contact information.
     * Add a chat feature to connect users to the tattoo artist

- Artist page:
    * Create a separate display only version that users can go to to see that artist's gallery of images and contact information
    * Add the search feature to the artist's landing page so they can also utilize our database of images to see other artist's information.
    * Add a calendar and appointment making functionality.

## Technology Used
- React
- React Router
- Materialize-React NPM, Google Fonts, and Google Icons
- Node.js and Express
- Express-Sessions and bcrypt (user authentication and password encoding) 
- Smarty Streets API (address validation)
- MongoDB/Mongoose (database)
- GitHub (repository and version control)
- Deployed on Heroku (with Mlab)

## Team Member's Contributions and Contact Info

### Frontend (Chancy Leath, Andi Carlstrom, and Mitch Waite)
* Chancy Leath (chancyleath@hotmail.com): 
    - Project Manager and Quality Assurance
    - Overall design and color scheme used throughout app
    - Set up React Router
    - Created the User Landing page and its related componenets
    - Created the search form, search results/gallery components on the User page
    - Created the cards to display the images in the User page 
    - Created global componentes for the Navbar, and Select inputs for style and placement
    - Created the "No Match" page
    - Wrote the front end API connects to connect to the backend routes for queries and returns on User page
* Andi Carlstrom (andi.carlstrom@gmail.com): 
    - Application Visionary (it was her idea!)
    - Created the Artist Landing page and its related components
    - Created the gallery area and cards used on the Artist page
    - Created the Photo Upload modal/form 
    - Created the Edit Artist Information modal/form
    - Wrote the front end API connects to the back routes for artist profile updates and saving/returning images to the artist page
* Mitch Waite (mitchtwaite@gmail.com): 
    - Created the Home Page and its corresponding components
    - Created the existing user login form
    - Created the  account creation form/modal (for both user and artist)
    - Created the various error message modals/displays used during sign up and login
    - Overall CSS styling and cleanup of layouts on all pages

### Backend (Jonathan Pena, Jacob Morris, and Chancy Leath)
* Jonathan Pena (penajtokyorm@gmail.com): 
    - Database and the models (Customer, Artist, Images) creation and associations
    - Set up the server.js file
    - Wrote the Authorization routes and controller
    - Wrote the Artist Admin (profile updates) routes and controller
* Jacob Morris (jacobthomasmorris@gmail.com): 
    - Smarty Streets API integration/routing for address validation during tattoo artist account creation 
    - Also the error modal associated with an invalid address
* Chancy Leath (chancyleath@hotmail.com): 
    - Wrote the Image routes and controller (saving and various "get" methods for all images used)

## Credits
* Page background images and tab icon PNGtree.com.
