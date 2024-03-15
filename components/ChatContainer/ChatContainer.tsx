'use client';

import ChatBubble from '../ChatBubble/ChatBubble';
import { Stack, ScrollArea } from '@mantine/core';

const ChatContainer = (props: any) => {
  const messages = props.messages;
  const viewport = props.viewport;

  return (
    <ScrollArea scrollbarSize={8} scrollHideDelay={0} scrollbars="y" viewportRef={viewport}>
      <Stack gap="xl" style={{height: '85vh'}}>
        {
          messages && messages.map((message: any) => (
            <ChatBubble key={message.id} isGPT={message.role !== "user"}  message={message.content} name={message.role} /> )
          )}
      </Stack>
    </ScrollArea>
  )

}

export default ChatContainer;
