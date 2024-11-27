// src/components/PermissionsManager.js

import React, { useState } from "react";
import { roles, permissions, rolePermissions } from "../data";

const PermissionsManager = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [assignedPermissions, setAssignedPermissions] = useState([]);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setAssignedPermissions(rolePermissions[role] || []);
  };

  const handlePermissionToggle = (permission) => {
    if (assignedPermissions.includes(permission)) {
      setAssignedPermissions(assignedPermissions.filter((perm) => perm !== permission));
    } else {
      setAssignedPermissions([...assignedPermissions, permission]);
    }
  };

  const savePermissions = () => {
    rolePermissions[selectedRole] = assignedPermissions;
    alert(`Permissions for ${selectedRole} updated!`);
  };

  return (
    <div>
      <h2>Permissions Manager</h2>
      <select onChange={(e) => handleRoleChange(e.target.value)}>
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>

      {selectedRole && (
        <>
          <h3>Manage Permissions for {selectedRole}</h3>
          <ul>
            {permissions.map((perm) => (
              <li key={perm.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={assignedPermissions.includes(perm.name)}
                    onChange={() => handlePermissionToggle(perm.name)}
                  />
                  {perm.name}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={savePermissions}>Save Permissions</button>
        </>
      )}
    </div>
  );
};

export default PermissionsManager;
