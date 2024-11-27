import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const ViewBooks = ({ bookholders }) => {
  const [books, setBooks] = useState({});

  const addBook = (holderId, bookName) => {
    setBooks((prev) => ({
      ...prev,
      [holderId]: [...(prev[holderId] || []), bookName],
    }));
  };

  return (
    <Box>
      {bookholders.map((holder) => (
        <Box key={holder.id} sx={{ marginBottom: 2 }}>
          <Typography>{holder.name}</Typography>
          <TextField
            placeholder="Add Book"
            size="small"
            sx={{ marginRight: 2 }}
          />
          <Button onClick={() => addBook(holder.id, "Book Name")}>
            Add Book
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ViewBooks;
