Social Network API

Description

This is a Social Network API built using Node.js, Express.js, MongoDB, and Mongoose. The API allows users to create accounts, add thoughts, react to friends' thoughts, and manage friend lists.

Installation

Clone the repository:

git clone git@github.com:HamzahAlsalmi/Social_Network_AP.git

Navigate into the project folder:

cd Social_Network_AP

Install dependencies:

npm install

Start the server:

npm run dev

Usage

This API can be tested using Insomnia or Postman.

API Routes

User Routes

GET /api/users → Get all users

GET /api/users/:userId → Get a user by ID

POST /api/users → Create a new user

PUT /api/users/:userId → Update a user by ID

DELETE /api/users/:userId → Delete a user by ID

Friend Routes

POST /api/users/:userId/friends/:friendId → Add a friend

DELETE /api/users/:userId/friends/:friendId → Remove a friend

Thought Routes

GET /api/thoughts → Get all thoughts

GET /api/thoughts/:thoughtId → Get a thought by ID

POST /api/thoughts → Create a new thought

PUT /api/thoughts/:thoughtId → Update a thought by ID

DELETE /api/thoughts/:thoughtId → Delete a thought by ID

Reaction Routes

POST /api/thoughts/:thoughtId/reactions → Add a reaction to a thought

DELETE /api/thoughts/:thoughtId/reactions/:reactionId → Remove a reaction from a thought

Walkthrough Video



Technologies Used

Node.js

Express.js

MongoDB & Mongoose

Insomnia/Postman for testing

License

This project is licensed under the MIT License.

