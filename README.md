# Authify — Next.js Authentication App

A full-stack authentication web application built with **Next.js, TypeScript, MongoDB, and JWT**. Authify provides user registration, login, logout, and protected profile access through a clean, responsive interface with a pastel-pink design.

🔗 **Live Demo:** [authify-raina.vercel.app](https://authify-raina.vercel.app)

📂 **GitHub Repository:** [next-auth-app](https://github.com/rainanirmal/next-auth-app)

---

## ✨ Features

- **User Registration** — Create an account with username, email, and password.
- **User Login** — Authenticate existing users using their credentials.
- **JWT Authentication** — Use JSON Web Tokens to manage authenticated sessions.
- **HTTP Cookies** — Store the authentication token in a cookie.
- **Protected Routes** — Restrict access to authenticated users.
- **User Profile** — Retrieve and display the logged-in user's information.
- **Logout** — Clear the authentication cookie to end the session.
- **MongoDB Integration** — Store and retrieve user information using MongoDB and Mongoose.
- **Responsive UI** — A modern interface with a soft pastel-pink theme.
- **Cloud Deployment** — Deployed using Vercel.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| React | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive layouts |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | Token-based authentication |
| Axios | HTTP requests |
| React Hot Toast | User notifications |
| Vercel | Deployment and hosting |

## 📸 Application Pages

- **Login:** Sign in using registered credentials.
- **Signup:** Create a new user account.
- **Profile:** Access protected user information after authentication.

## 🚀 Getting Started

Follow these steps to run Authify locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account or a local MongoDB instance
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rainanirmal/next-auth-app.git
```

### 2. Navigate to the project directory

```bash
cd next-auth-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory and add the following variables:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_SECRET=your_secure_jwt_secret
```

Replace the placeholder values with your actual MongoDB connection string and a strong, randomly generated JWT secret.

> **Security:** Never commit `.env.local` or expose your database credentials or JWT secret in your source code. Ensure the file is excluded by `.gitignore`.

Use the exact environment variable names expected by your database configuration and authentication code.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication Flow

1. A new user registers through the signup page.
2. The application validates the submitted information and stores the user in MongoDB.
3. The user logs in using their registered credentials.
4. The server verifies the credentials and issues a signed JWT in a cookie.
5. Protected routes and API endpoints use the token to identify the authenticated user.
6. The user can access their profile and log out when finished.

## 📁 Project Structure

```text
next-auth-app/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── users/
│   │   ├── login/
│   │   ├── signup/
│   │   └── profile/
│   ├── dbConfig/
│   ├── helpers/
│   ├── models/
│   └── proxy.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

*Note: This structure is representative. Adjust it to match the actual files and routes in your repository.*

## 🌐 Deployment

The application is deployed on [Vercel](https://vercel.com/).

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables in your project settings.
3. Deploy the application.
4. Open the generated deployment URL and test the authentication flow.

## 🔒 Security Considerations

- Store passwords securely using an appropriate password-hashing algorithm.
- Keep JWT secrets and database credentials private.
- Validate user input on the server.
- Use secure cookie settings appropriate for your production environment.
- Verify authentication tokens on the server before returning protected data.

## 🎯 Learning Outcomes

This project helped me explore:

- Building full-stack applications with Next.js and TypeScript.
- Creating API routes and integrating MongoDB.
- Implementing JWT-based authentication.
- Working with cookies and protected routes.
- Managing frontend API requests and loading states.
- Deploying a web application using Vercel.

## 👩‍💻 Author

**Raina Nirmal**

- GitHub: [@rain anirmal](https://github.com/rainanirmal)

---

⭐ If you find this project useful, consider giving the repository a star!
