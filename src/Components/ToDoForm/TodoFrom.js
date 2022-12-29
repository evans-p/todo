import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./TodoForm.css";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const errorMsg = "The title cannot be empty, or just whitespace.";

  const validateTodo = () => {
    return title.trim().length > 0 ? true : false;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validateTodo()) {
      props.addTodo(title, description);
      props.handleClose();
      return;
    }
    setError(true);
  };

  return (
    <Paper className="TodoForm">
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h6" style={{ marginTop: 35 }}>
          Add New Task
        </Typography>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ width: "90%", marginTop: 10 }}
          value={title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
            setError(false);
          }}
          error={error}
          helperText={error ? errorMsg : ""}
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          multiline
          rows={4}
          style={{ width: "90%", marginTop: 10 }}
          value={description}
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ width: "90%", marginTop: 10 }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          style={{ width: "90%", marginTop: 5, marginBottom: 35 }}
          onClick={props.handleClose}
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
}
