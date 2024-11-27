import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h3>Library System</h3>
    <ul>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/bookholder">Book Holder</Link>
      </li>
      <li>
        <Link to="/librarian">Librarian</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
