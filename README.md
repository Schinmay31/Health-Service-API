# Project Name

## Overview
This project is a RESTful API built using **Node.js** and **MongoDB**. It provides functionality for managing services (like creating, retrieving, updating, and deleting services) and includes detailed instructions for setting up and testing the API.

---
## API Documentation Link : https://documenter.getpostman.com/view/38197197/2sAXxWYU79


## Technology Stack
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database to store service data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Postman**: For API manual testing and documentation.

---

## Prerequisites

Ensure that the following are installed on your local machine:
1. **Node.js** (v14+ recommended)
2. **MongoDB** (Local instance or cloud database such as MongoDB Atlas)
3. **Postman** (Optional but recommended for testing the API)

---

## Installation & Setup

Follow the steps below to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone <repo Link>
   cd project-name

2. Install dependencies:
   ```bash
   npm install
3. Set up your environment variables by creating a .env file: 
   ```bash
   MONGO_URI=<MongoDB Connection URL>
   
4. Start the application:
```bash
 node index.js
