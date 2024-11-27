// src/data.js

// Mock Data for Users
export const users = [
    { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin" },
    { id: 2, name: "Book Holder User", email: "bookholder@example.com", role: "BookHolder" },
    { id: 3, name: "Librarian User", email: "librarian@example.com", role: "Librarian" },
  ];
  
  // Mock Data for Roles
  export const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "BookHolder" },
    { id: 3, name: "Librarian" },
  ];
  
  // Mock Data for Permissions
  export const permissions = [
    { id: 1, name: "ManageUsers" },
    { id: 2, name: "AssignRoles" },
    { id: 3, name: "SetPermissions" },
    { id: 4, name: "ManageBooks" },
    { id: 5, name: "ViewBooks" },
    { id: 6, name: "IssueBooks" },
    { id: 7, name: "ReturnBooks" },
    { id: 8, name: "ViewIssuedBooks" },
    { id: 9, name: "ViewMemberData" },
    { id: 10, name: "ManageBookRequests" },
  ];
  
  // Role-Permission Mapping
  export const rolePermissions = {
    Admin: ["ManageUsers", "AssignRoles", "SetPermissions", "ManageBooks"],
    BookHolder: ["ViewBooks", "IssueBooks", "ReturnBooks"],
    Librarian: ["ViewIssuedBooks", "ViewMemberData", "ManageBookRequests"],
  };
  
  // Mock Data for Books
  export const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available" },
    { id: 2, title: "1984", author: "George Orwell", status: "Issued" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Available" },
  ];
  