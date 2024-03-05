'use client';

import ChatBubble from '../ChatBubble/ChatBubble';
// import type { RootState } from '../../app/store';
// import { useSelector } from 'react-redux';
import { Stack } from '@mantine/core';

const ChatContainer = (props: any) => {
  const messages = props.messages;
  return (
    <Stack gap="xl" style={{height: '85vh'}}>
      {
       messages && messages.map((message: any) => (
          <ChatBubble key={message.id} isGPT={message.role !== "user"}  message={message.content} name={message.role} /> )
        )}
    </Stack>
  )

}

export default ChatContainer;
