'use client';

import { createSlice } from '@reduxjs/toolkit'
import { Bubble } from '../../components/ChatBubble/ChatBubble';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChatState {
  history: Bubble[];
}

const initialState: ChatState = {
  history: [],
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<Bubble>) => {
      state.history.push(action.payload);
    },
  },
})

export const { push } = chatSlice.actions

export default chatSlice.reducer
