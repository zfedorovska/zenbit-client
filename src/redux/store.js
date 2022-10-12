import { configureStore } from '@reduxjs/toolkit';
import feedbacksReducer from './feedbacks/feedbacks-reducer';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
  },
});

export default store;
