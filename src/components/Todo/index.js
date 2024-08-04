import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <ListItem
    secondaryAction={
      <>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
        <Checkbox edge="end" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      </>
    }
    sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
  >
    <ListItemText primary={todo.text} />
  </ListItem>
);

export default Todo;
