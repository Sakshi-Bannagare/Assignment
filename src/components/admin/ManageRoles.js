import React from "react";
import { Box, Typography, Checkbox, Button } from "@mui/material";

const rolesPermissions = {
  Bookholder: ["View Books", "Issue Books", "Return Books"],
  Librarian: ["Approve Requests", "View Issued Books"],
};

const ManageRoles = ({ users, onUpdatePermissions }) => {
  const handlePermissionChange = (userId, permission) => {
    onUpdatePermissions(userId, permission);
  };

  return (
    <Box>
      <Typography variant="h6">Manage Roles and Permissions</Typography>
      {users.map((user) => (
        <Box key={user.id} sx={{ marginBottom: 2 }}>
          <Typography>{user.name} ({user.role})</Typography>
          {rolesPermissions[user.role]?.map((perm) => (
            <div key={perm}>
              <Checkbox
                checked={user.permissions.includes(perm)}
                onChange={() => handlePermissionChange(user.id, perm)}
              />
              {perm}
            </div>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ManageRoles;
