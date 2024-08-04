import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../Todo';
import { toggleTodo, deleteTodo } from '../../actions';
import { List, Paper } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <List>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={(id) => dispatch(toggleTodo(id))}
            deleteTodo={(id) => dispatch(deleteTodo(id))}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
