import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TodoList(props) {
  const renderTodos = () => {
    return props.todos.map((todo, idx) => {
      return (
        <ListItem
          key={Math.floor(99999999999 * Math.random())}
          disablePadding
          secondaryAction={
            <Box>
              <Tooltip title="Edit">
                <IconButton
                  edge="end"
                  aria-label="edit"
                  style={{ marginRight: 5 }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    props.deleteTodo(todo.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                inputProps={{ "aria-label": "controlled" }}
                color="success"
                checked={todo.completed}
                onChange={() => {
                  props.editTodo(
                    idx,
                    todo.title,
                    todo.description,
                    !todo.completed
                  );
                }}
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} secondary={todo.date} />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return (
    <>
      {props.todos.length ? (
        <List>{renderTodos()}</List>
      ) : (
        <p
          style={{
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.8,
            textAlign: "center",
            width: "80vw",
          }}
        >
          No tasks were found. Click the 'Add new Task' Button on the bottom
          left, to add a new task.
        </p>
      )}
    </>
  );
}
