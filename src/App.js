import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Container, Typography, Box } from '@mui/material';

const App = () => (
  <Container maxWidth="sm">
    <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <AddTodo />
      <TodoList />
    </Box>
  </Container>
);

export default App;
