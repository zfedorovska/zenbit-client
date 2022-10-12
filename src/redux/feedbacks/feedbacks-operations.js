import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://quiet-tor-32733.herokuapp.com/api/';

export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchFeedbacks',
  async () => {
    const response = await axios.get('/feedbacks');
    return response.data;
  }
);

export const addFeedback = createAsyncThunk(
  'feedbacks/addFeedback',
  async function (data) {
    const feedback = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    const response = await axios.post('/feedbacks', feedback);
    return response.data;
  }
);
