# Gap Take-Home Challenge

### Search and render with React, Node and Express

# Installation

Install dependencies `npm i` then run the app `npm run start-dev` and visit http://localhost:3000/ in your browser.

# Challenge

[Register a free developer account with Unsplash](https://unsplash.com/developers)

Create an input field and submit button where a user can enter a search term, "dogs", for example. When the user hits the submit button, a request with the search term should be made. Add a POST route `/api/search` in the server.js file to catch this request. Axios is included in the dependencies.

The express `/api/search` POST route should then take the search term and make a server-side api call to the Unsplash [search Api](https://unsplash.com/documentation#search-photos) for photos matching the search term.

Send back the response to the client and render the images on the page with a responsive UI while making use of React functional components as opposed to classes.

# Example Reference UI

Example reference UI image in the public directory called `reference-ui.png`. Note this reference image includes other aspects such as the profile picture of the Unsplash user, which isn't a requirement for this challenge. Feel free to be creative with the UI which has a primary goal of being responsive and rendering the image urls derived from the search term.

# Submission

Push your code up to github and reply back with the url to the repo.
