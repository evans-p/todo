import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";

import AddIcon from "@mui/icons-material/Add";

import TodoForm from "../ToDoForm/TodoFrom";
import TodoList from "../TodoList/TodoList";

import { dateAndTime } from "../../Utils/dateAndTime";

export default function TodoApp() {
  let today = dateAndTime();

  const initialTodos = [
    {
      id: uuid(),
      title: "Clean Bathroom",
      description: "Clean Bathroom Clean Bathroom Clean Bathroom",
      date: today,
      completed: true,
    },
    {
      id: uuid(),
      title: "Clean Bathroom",
      description:
        "Clean Bathroom Clean Bathroom Clean Bathroom Clean Bathroom",
      date: today,
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const editTodo = (idx, title, description, completed) => {
    setTodos([
      ...todos.slice(0, idx),
      {
        id: todos[idx].id,
        title: title,
        description: description,
        completed: completed,
        date: todos[idx].date,
      },
      ...todos.slice(idx + 1),
    ]);
  };

  const addTodo = (title, description) => {
    let td = dateAndTime();
    setTodos([
      ...todos,
      {
        id: uuid(),
        title: title,
        description: description,
        date: td,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <Paper
      style={{
        height: "100vh",
        backgroundColor: "#eee",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App with Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={10}>
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </Grid>
        <Tooltip title="Add new Task" placement="top">
          <Fab
            color="primary"
            aria-label="add"
            style={{ position: "fixed", bottom: 40, right: 40 }}
            aria-describedby={id}
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <TodoForm addTodo={addTodo} handleClose={handleClose} />
        </Popover>
      </Grid>
    </Paper>
  );
}
