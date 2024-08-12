# NoteSync

NoteSync is a web application that allows users to create, edit, and manage their notes. The application is built with a React frontend and a Node/Express backend, and it uses MongoDB for data storage.

## Features
(i) User authentication with JWT
(ii) Create, edit, and delete notes
(iii) Search notes
(iv) Pin notes

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

## Backend Setup
1. Clone the repository
2. Navigate to the `backend` directory
3. Install dependencies with `npm install`
4. Create a `.env` file in the `backend` directory and add the following environment variables:
```
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```
5. Start the server with `npm start`

## Frontend Setup
1. Navigate to the `frontend` directory
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`


## Usage
1. Register for an account
2. Log in with your credentials
3. Create, edit, and delete notes
4. Search notes
5. Pin notes

## Scripts
### Backend
- `npm start`: Start the server

### Frontend
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.