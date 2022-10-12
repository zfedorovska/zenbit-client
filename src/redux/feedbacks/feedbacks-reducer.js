import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchFeedbacks, addFeedback } from '../feedbacks/feedbacks-operations';

const itemsReducer = createReducer([], {
  [fetchFeedbacks.fulfilled]: (_, action) => action.payload,
  [addFeedback.fulfilled]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [fetchFeedbacks.pending]: () => true,
  [fetchFeedbacks.fulfilled]: () => false,
  [fetchFeedbacks.rejected]: () => false,
  [addFeedback.pending]: () => true,
  [addFeedback.fulfilled]: () => false,
  [addFeedback.rejected]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  loading,
});
