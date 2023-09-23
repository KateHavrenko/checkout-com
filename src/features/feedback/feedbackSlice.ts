import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'; // Assuming you want to use the uuid library

const initialState: { id: string; data: any }[] = [];

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      const feedback = {
        id: uuid(),
        data: action.payload,
      };

      return [...state, feedback];
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
