'use client';

import { useState } from 'react';
import { Input, rem } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { push } from '../../features/chat/chatSlice';
import { IconSquareArrowUp } from '@tabler/icons-react';

const UserInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      dispatch(push({isGPT: false, name: 'Angel', message: value}))
      setValue('');
    }
  };
  return (
    <>
      <Input
        placeholder="Message MyGPT"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onKeyDown={handleChange}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <IconSquareArrowUp
            style={{ width: rem(30), height: rem(30) }}
            aria-label="Send Message"
            // onClick={handleChange}
          />
        }
      />
    </>
  );
}

export default UserInput;
