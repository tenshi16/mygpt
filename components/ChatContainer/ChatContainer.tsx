'use client';

import ChatBubble from '../ChatBubble/ChatBubble';
import type { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { Stack } from '@mantine/core';

const ChatContainer = () => {
  const chat = useSelector((state: RootState) => state.chat.history);
  return (
    <Stack gap="xl" style={{height: '85vh'}}>
      {
        chat.map(({isGPT, name, message}, index) => (
          <ChatBubble key={index} isGPT={isGPT} name={name} message={message} /> )
        )}
    </Stack>
  )

}

export default ChatContainer;
