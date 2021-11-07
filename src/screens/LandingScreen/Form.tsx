import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useMutation } from "react-query";
import { createDocument } from "firebaseApp/firestore";

export const Form: React.FC = () => {
  const [name, setName] = useState("");

  const data = { test: 1 };

  const { mutate } = useMutation(() => createDocument("test", data), {
    onSuccess: (data) => {
      console.log("Yay!:", data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleClick = () => {
    mutate();
  };
  return (
    <>
      <TextField
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained">
        Add
      </Button>
    </>
  );
};
