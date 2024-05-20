# Mancomm App

Welcome to the Regulation Data App! This repository contains both frontend and backend components for Regulation Data designed to provide Regulation information.

## Overview

The Regulation Data App is divided into two main components:

- **Frontend**: Crafted with React and styled with Bootstrap for a sleek user experience.
- **Backend**: Built on Express and Mongoose over DocumentDB for efficient data handling.

## Repository

You can find the source code for this application at the following GitHub repository:

[GitHub Repository Link](https://github.com/your-username/your-repository)

## Deployment

The backend of this application is deployed on AWS Lambda. You can access the deployed backend API here:

[AWS Lambda Deployment Link](https://your-lambda-url.aws.com)

### Available API Routes

The backend provides three primary routes:

- **GET /parse**: Parses HTML content into JSON, stores it in the database, and uploads it to an S3 bucket. This route is used to extract and process data from provided HTML, ensuring the data is both persistently stored and immediately available for further use.
  [AWS Lambda Link](https://0uxkgl6wuk.execute-api.us-east-1.amazonaws.com/default/regulation/parse)

- **GET /fetch**: Retrieves data directly from the database. This route is used to access the processed and stored data, allowing for quick data retrieval for further analysis or display in the frontend.
  [AWS Lambda Link](https://0uxkgl6wuk.execute-api.us-east-1.amazonaws.com/default/regulation/fetch)

- **GET /download**: Fetches data from an S3 bucket. This route is designed for accessing larger datasets or files that are stored in AWS S3, providing an efficient way to handle file downloads without overloading the main database.
  [AWS Lambda Link](https://0uxkgl6wuk.execute-api.us-east-1.amazonaws.com/default/regulation/download)

## Folder Structure

- **frontend**: Contains the React-based frontend of the application. This folder houses all the necessary components, styles, and assets for the user interface.

- **backend**: Contains the Express.js backend of the application. This folder includes routes, controllers, models, and database configurations required for handling regulation data.

## Technologies Used

- **Frontend**:

  - React: A JavaScript library for building user interfaces.
  - Bootstrap: A popular CSS framework for creating responsive and mobile-first designs.

- **Backend**:
  - Express.js: A web application framework for Node.js, used for building APIs and handling HTTP requests.
  - Sequelize: An ORM (Object-Relational Mapping) for Node.js, used for interacting with databases.
  - AWS DocumentDB: A fully managed document database service that supports MongoDB workloads. It is designed for storing complex, document-oriented data structures at scale, offering robust features for high availability, durability, and security.

## Setup Instructions

To run the App locally, follow these steps:

1. **Install Dependencies**:

- Navigate to the `frontend` folder and run:
  ```
  npm install
  ```
- Navigate to the `backend` folder and run:
  ```
  npm install
  ```

3. **Start Backend**:

- For development mode:
  ```
  cd backend
  npm run dev
  ```
- For production mode:
  ```
  cd backend
  npm run start
  ```

4. **Start Frontend**:

- Navigate to the `frontend` folder and run:
  ```
  npm run start
  ```

5. **Access the Application**:

- Once both servers are running, you can access the Stock App by navigating to `http://localhost:3000` in your web browser.
