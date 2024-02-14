# React Register/Login Template with TailwindCSS, Passport, Bycypt

This project provides a template for quickly setting up a React application with a register/login functionality using Passport/Bcrypt for encription and basic navigation between pages. It leverages [TailwindCSS](https://tailwindcss.com/) for styling, offering a modern and responsive design out of the box.

## Features

- Register/Login functionality with basic client-side validation.
- Passport.js - Passport is a flexible and modular authentication middleware for Node.js that we use to handle user authentication. It supports a wide range of strategies, including OAuth, token-based authentication, and more. In this template, Passport is configured to manage login sessions and authenticate users securely.
- Password Hashing with bcrypt - For password security, I used bcrypt, a robust hashing algorithm designed to secure passwords. Bcrypt automatically handles salt generation and hashing, offering protection against rainbow table attacks and brute-force attacks. Here's why bcrypt is a great choice for password hashing:
  - Salting: Bcrypt incorporates a salt to protect against rainbow table attacks. A new salt is generated for each password, ensuring that each hash is unique, even for identical passwords.
  - Work Factor: The algorithm's work factor is adjustable, which means the time required to generate a hash can be increased as hardware capabilities improve, thereby maintaining a high level of security over time.
- Navigation bar for easy access to Home, About, and Contact pages.
- User credentials stored in local storage for demonstration purposes, easily connect to any database of your choice.
- Styled with TailwindCSS for a sleek, responsive design.


## Using the Template

To use this template, clone the repository or use the provided CLI tool to scaffold a new project:

npx react-register-login

## Installation and Running the Project

This project is structured with separate directories for the frontend and backend, ensuring a clean separation of concerns and ease of development. Follow the steps below to set up and run both parts of the application.

## To run the project from root folder and start both fronend and server, this require "concurrently" packages:

- npm install
- npm start
- open your default web browser to http://localhost:3000
- register a user, credentials will be stored in local storage this should not be used in production, for production connect to any database of your choice
- login with the user you just registered and modify the app as you desire

## Alterantively, you can start both frontend and backend separately if you don't want to use "concurently" package:

## Backend Setup

- cd backend
- npm install
- node server.js # or nodemon server.js

## Frontend Setup

- cd frontend
- npm install
- npm start
- open your default web browser to http://localhost:3000
- register a user, credentials will be stored in local storage this should not be used in production, for production connect to any database of your choice
- login with the user you just registered and modify the app as you desire

## Customization

## Database Integration

By default, user credentials are stored in local storage for demonstration purposes. For production applications, it's recommended to integrate a secure database for managing user credentials. The backend can be easily extended to connect with any database of your choice (e.g., MongoDB, PostgreSQL, Firebase) by modifying the server logic.

## TailwindCSS Customization

The frontend's appearance can be customized via TailwindCSS by editing the tailwind.config.js file. For more detailed instructions on customizing TailwindCSS, refer to their official documentation.

## Contribution

Contributions to this template are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
react-register-login/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── components/
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Navigation.jsx
│       │   ├── ProtectedRoute.jsx
│       │   └── Register.jsx
│       ├── app.js
│       ├── App.test.js
│       ├── authContext.js
│       ├── index.js
│       ├── reportWebVitals.js
│       └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```
