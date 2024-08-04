import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <TextField
        label="Add a new task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mr: 2, width: '300px' }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
