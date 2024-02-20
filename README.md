# Pulley CipherSprint Challenge Solution

## Introduction
Welcome to my solution repository for the Pulley CipherSprint Challenge! As a developer candidate at Pulley, this challenge was an exciting opportunity to demonstrate my problem-solving skills and proficiency in working with APIs, encryption methods, and asynchronous JavaScript.

## Challenge Context
This project was created as part of the application process for developers at Pulley, a company dedicated to making equity management easier and more transparent. If you're interested in solving complex problems and contributing to a team that's reshaping the world of equity management, consider exploring [career opportunities at Pulley](https://pulley.com/careers).

## Challenge Overview
The CipherSprint Challenge involved fetching resources through an API using `encrypted_path` parameters and decoding them with various `encryption_method`s. The task required both creativity and technical knowledge to handle different encryption methods and the possibility of extending the codebase for future encryption schemes.

## Technologies Used
- **Axios**: Utilized for making HTTP requests to the API.
- **Promises**: Implemented to handle asynchronous data fetching and to chain HTTP requests efficiently.
- **Node.js**: The runtime environment for running JavaScript on the server.

## Features
- **Dynamic Decryption**: The code dynamically decrypts the `encrypted_path` based on the given `encryption_method`.
- **Extensibility**: The solution is designed to be extensible, allowing for easy integration of additional encryption methods.
- **Error Handling**: Implements robust error handling to ensure reliability and ease of debugging.

## Getting Started
To run this solution on your machine, follow these steps:

1. Ensure that you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository to your local machine.
3. Navigate to the repository folder and run `npm install` to install dependencies.
4. Run the script using `node index.js` (assuming your entry file is named `index.js`).

## Code Example
Here's a snippet showcasing the main function that fetches and decrypts the endpoints:

```javascript
const axios = require("axios");

function fetchNextEndpoint(encodedString, isFirstCall = true) {
  // Base URL setup and fetching logic
}

// Initial call to the function with the base64 encoded string
const encodedString = "Your_Encoded_String_Here";
fetchNextEndpoint(encodedString);

// DecryptPath function and any additional helper functions
