'use client';

import ChatBubble from '../ChatBubble/ChatBubble';
import { Stack } from '@mantine/core';

const MOCK_CHATS = [{
  isGPT: false,
  name: 'Angel',
  message: 'explain fractals as simply as possible'
}, {
    isGPT: true, 
    name: 'My GPT',
    message: `
Sure! Imagine you have a shape that's made up of smaller versions of itself, and those smaller versions are made up of even smaller versions, and so on, repeating forever. That's basically what a fractal is.
Fractals are shapes that repeat themselves at smaller and smaller scales, no matter how much you zoom in. They're like never-ending patterns, where each part looks like the whole thing, just smaller. Think of a tree branch that splits into smaller branches, and those smaller branches split again, and so on, creating a pattern that looks similar at every level of magnification. That's a simple way to understand fractals!
`},
  {
    isGPT: false,
    name: 'Angel',
    message: 'explain fractals as simply as possible'
  }, {
    isGPT: true, 
    name: 'My GPT',
    message: `
    That's a simple way to understand fractals!
`}
]
const ChatContainer = () => {
  return (
    <Stack gap="xl">
      {
        MOCK_CHATS.map(({isGPT, name, message}, index) => (
          <ChatBubble key={index} isGPT={isGPT} name={name} message={message} /> )
        )}
    </Stack>
  )

}

export default ChatContainer;
