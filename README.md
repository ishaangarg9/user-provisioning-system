# **User Provisioning System API**

A RESTful API for managing users, roles, and user-role assignments in an organization. This application uses **Node.js**, **Express**, and **MongoDB** for the backend.

---

## **Features**
- Manage users (CRUD operations).
- Manage roles (CRUD operations).
- Assign and unassign roles to users.
- Input validation and error handling.

---

## **Project Structure**
```
user-provisioning-system/
├── controllers/       # API business logic
├── models/            # MongoDB schema definitions
├── routes/            # API route handlers
├── config/            # Database configuration
├── .env               # Environment variables
├── server.js          # Application entry point
├── README.md          # Project instructions
├── package.json       # Project dependencies and scripts
```

---

## **Prerequisites**
Before running the application, ensure you have the following installed:
1. **Node.js** (v16 or later)
2. **npm** (comes with Node.js)
3. **MongoDB** (for running locally)

---

## **Setup Instructions**

### **1. Clone the Repository**
bash-
git clone https://github.com/ishaangarg9/user-provisioning-system.git
cd user-provisioning-system


### **2. Install Dependencies**
Install the required Node.js modules:
bash-
npm install


---

## **Running MongoDB Locally**

### **1. Install MongoDB**
Follow the official MongoDB installation guide for your operating system:
- [MongoDB Installation Docs](https://www.mongodb.com/docs/manual/installation/)

### **2. Start the MongoDB Server**
Run the following command to start MongoDB:
bash-
sudo systemctl start mongod


### **3. Verify MongoDB is Running**
Check if MongoDB is running:
bash-
sudo systemctl status mongod

Or, connect to MongoDB:
bash-
mongo


---

## **Configuration**

### **1. Set Environment Variables**
Create a `.env` file in the project root and add the following:
.env-
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/user-provisioning


### **2. Update MongoDB Connection**
Ensure the `MONGO_URI` points to your local MongoDB instance.

---

## **Running the Application**

### **1. Start the Server**
Start the application using:
bash-
node server.js

### **2. Access the API**
Once the server is running, access the API at:

http://localhost:5001/api


---

## **API Endpoints**

### **User Management**
| Method | Endpoint             | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/users`          | Create a new user            |
| GET    | `/api/users`          | Get all users                |
| GET    | `/api/users/:id`      | Get user by ID               |
| PUT    | `/api/users/:id`      | Update user details          |
| DELETE | `/api/users/:id`      | Soft delete a user (inactive)|

### **Role Management**
| Method | Endpoint             | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/roles`          | Create a new role     |
| GET    | `/api/roles`          | Get all roles         |
| GET    | `/api/roles/:id`      | Get role by ID        |
| PUT    | `/api/roles/:id`      | Update role details   |
| DELETE | `/api/roles/:id`      | Delete a role         |

### **User-Role Assignment**
| Method | Endpoint                  | Description                     |
|--------|----------------------------|---------------------------------|
| POST   | `/api/user-roles/users`          | Assign a role to a user         |
| GET    | `/api/user-roles`          | List all user-role assignments  |
| DELETE | `/api/user-roles/:id`      | Remove a role assignment        |


---

## **Stopping MongoDB**
To stop the MongoDB server, run:
bash-
sudo systemctl stop mongod
`

---

## **Troubleshooting**

### Common Issues
1. **MongoDB Connection Error**:
   - Ensure MongoDB is running locally.
   - Verify the `MONGO_URI` in the `.env` file.
2. **Port in Use**:
   - Another service may be using the port. Change the `PORT` in the `.env` file.
