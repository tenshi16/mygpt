'use client';

import { Flex, Text, rem, Grid } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
interface Bubble {
  isGPT: boolean,
  message: string,
  name: string,
}
const ChatBubble = ({isGPT, message, name}: Bubble) => {
  return (
    <Grid gutter="xs">
      <Grid.Col span="content">
      <IconBrandMantine
        style={{ width: rem(30), height: rem(30) }}
        stroke={1.5}
        color="var(--mantine-color-blue-filled)"
      />
      </Grid.Col>
      <Grid.Col span={11}>
      <Flex direction="column">
        <Text size="md" fw={700}>{name}</Text>
        <Text size="md">{message}</Text>
      </Flex>
      </Grid.Col>
    </Grid>
  );
}

export default ChatBubble;
