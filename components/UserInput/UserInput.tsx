'use client';

import { useState } from 'react';
import { Input, rem } from '@mantine/core';
import { IconSquareArrowUp } from '@tabler/icons-react';

const UserInput = () => {
  const [value, setValue] = useState('');
  const handleChange = () => {};
  return (
    <>
      <Input
        placeholder="Message MyGPT"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <IconSquareArrowUp
            style={{ width: rem(30), height: rem(30) }}
            aria-label="Send Message"
            onClick={() => handleChange()}
          />
        }
      />
    </>
  );
}

export default UserInput;
