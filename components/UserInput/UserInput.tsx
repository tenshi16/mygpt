'use client';

import { Input, rem } from '@mantine/core';
import { IconSquareArrowUp } from '@tabler/icons-react';

const UserInput = ({input, handleInputChange, handleSubmit, scrollToBottom}: any) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
      <Input
        placeholder="Message MyGPT"
        value={input}
        onChange={handleInputChange}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <IconSquareArrowUp
            style={{ width: rem(30), height: rem(30) }}
            aria-label="Send Message"
            onClick={handleInputChange}
          />
        }
      />
    </form>
    </>
  );
}

export default UserInput;
