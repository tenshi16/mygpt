'use client'

import { useState } from 'react';
import { Text, rem, Flex, Space } from '@mantine/core';
import { IconSquareArrowUp } from '@tabler/icons-react';

const SuggestionBlock = (props: any) => {
  const title: string = props.title;
  const subtitle: string = props.subtitle;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave= () => {
    setIsHovered(false);
  }

  return (
    <Flex
      align="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <Text fw={700}>{title}</Text>
        <Text c="dimmed">{subtitle}</Text>
      </div>
      <Space w="xl" />
      {isHovered && 
          <IconSquareArrowUp
            style={{ width: rem(20), height: rem(20) }}
            aria-label="Start with Suggestion"
            onClick={() => {}} 
          />
      }
    </Flex>
  )
}

export default SuggestionBlock;
