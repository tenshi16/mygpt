'use client';

import { Flex, Text, rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
interface Bubble {
  isGPT: boolean,
  message: string,
  name: string,
}
const ChatBubble = ({isGPT, message, name}: Bubble) => {
  return (
    <Flex gap="md">
      <IconBrandMantine
        style={{ width: rem(30), height: rem(30) }}
        stroke={1.5}
        color="var(--mantine-color-blue-filled)"
      />
      <Flex direction="column">
        <Text size="md" fw={700}>{name}</Text>
        <Text size="md">{message}</Text>
      </Flex>
    </Flex>
  );
}

export default ChatBubble;
