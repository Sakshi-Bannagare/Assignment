# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Overview

The Library Management System is a web application designed to:
- Allow administrators to manage users.
- Provide book holders with tools to issue and return books.
- Empower librarians to approve or reject book issuance requests.

The application emphasizes a user-friendly interface, responsiveness, and dynamic role-based functionality.

---

## Features

1. **Admin Dashboard**  
   - Manage users by adding, editing, or deleting them.
   - Responsive interface with real-time updates.

2. **Book Holder Dashboard**  
   - Issue books and view issued books.
   - Return previously issued books.

3. **Librarian Dashboard**  
   - Approve or reject book issuance requests.
   - Overview of pending requests and approved actions.

4. **Role-Based Navigation**  
   - Each role (Admin, Book Holder, Librarian) has access to specific dashboards with distinct capabilities.

5. **Responsive Design**  
   - Styled for both desktop and mobile devices using CSS.

---

## Tech Stack

- **Frontend**: React.js (Hooks, Context API)
- **Styling**: CSS (responsive design)
- **State Management**: Context API
- **Build Tool**:  Create React App
- **Version Control**: Git

---
Functionality: Implementation of Core RBAC Features
In your project, the core features of Role-Based Access Control (RBAC), such as user management, role assignments, and permissions handling, are implemented through specific dashboards and interactions. Here's how the key aspects of RBAC functionality are exhibited in your project:

1. User Management
Admin Dashboard (User CRUD operations):
Create: The Admin can add new users by inputting a user’s name through a text input field. Once the "Add User" button is clicked, the user is added to the system (with a unique ID generated from the current timestamp).
Read: The Admin can view a list of users in a table format, showing the user names along with available actions like "Edit" and "Delete".
Update: Users can be edited by clicking the "Edit" button next to their names. The Admin can update the user's name and save the changes.
Delete: The Admin can remove users from the system by clicking the "Delete" button, which removes the user from the list of users in the system.
This enables efficient user management, where an Admin has full control over the users in the system.
2. Role Assignments and Role-Based Access
Role Context: In your project, roles like Admin, Book Holder, and Librarian are handled through the RoleContext which manages different types of users and their associated functionalities.
Admin: Has full access to create, edit, and delete users.
Book Holder: Has access to issue and return books.
Librarian: Approves or rejects book issuance requests.
Role Context is used to manage which users have access to which features based on their role, essentially implementing RBAC. The Admin can perform all operations, while the Book Holder and Librarian are restricted to their respective actions (issuing/returning books and approving/rejecting book requests, respectively).
3. Permissions Handling
Conditional Rendering Based on Roles:
The interfaces and available features change based on the user’s role. For example:
Admin Dashboard: Allows the Admin to manage users and has access to user creation and modification.
Book Holder Dashboard: The Book Holder can issue and return books, but only for their own records.
Librarian Dashboard: The Librarian has the ability to approve or reject book issuance requests. They cannot modify user data but can approve or reject specific book requests.
Role-based Views: Depending on the role stored in the RoleContext, the UI renders different elements, ensuring that each user only has access to their permitted actions. For example:
Admin sees all user data and can perform CRUD operations.
Book Holders only interact with the issued books and can only issue/return books for their profile.
Librarians are restricted to managing book issue requests, approving, or rejecting them.
4. CRUD Operations
User CRUD Operations (Admin Dashboard):
The Admin Dashboard provides a clear implementation of CRUD operations (Create, Read, Update, Delete) on user data, which directly reflects the ability to manage users within the system.
The Admin can:
Add users to the system.
View the users' data in a table.
Edit a user's information.
Delete users from the system.
Book Issuance CRUD Operations:
The Book Holder and Librarian dashboards exhibit CRUD functionality for book issuance.
Book Holders can Issue books to themselves and Return them when they're done.
The Librarian can approve or reject book issuance requests, ensuring control over who can have a book.
These operations provide the full cycle of CRUD functionality within the system, which is crucial for the RBAC mechanism, as users and roles are tied to specific permissions for each action.
5. Role-based Permissions for Each Action
Each dashboard (Admin, Book Holder, Librarian) is designed with actions specific to a role. Here's how permissions are enforced based on roles:
Admin Dashboard: Can perform Create, Update, and Delete on users.
Book Holder Dashboard: Can only Issue and Return books based on their own profile.
Librarian Dashboard: Can only Approve or Reject book issue requests.
Permissions Management: The UI components (buttons, forms, etc.) are displayed or hidden based on the role of the user interacting with the system. For instance, only a Librarian can see the "Approve" and "Reject" buttons for book requests, ensuring they have the necessary permissions to handle those actions.
----------------------
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/Sakshi-Bannagare/Assignment.git
cd library-management-system
2. Install Dependencies
Ensure you have Node.js installed, then run:

bash
Copy code
npm install
3. Start the Development Server
bash
Copy code
npm start
The app will run on http://localhost:3000.

4. Build for Production
bash
Copy code
npm run build
5. Run Tests (Optional)
bash
Copy code
npm test
