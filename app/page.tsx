'use client'

import { useState } from 'react';
import SuggestionBlock from '../components/SuggestionBlock/SuggestionBlock';
import UserInput from '../components/UserInput/UserInput';
import ChatContainer from '../components/ChatContainer/ChatContainer';
import { useChat } from "ai/react";
import { Text, rem, Grid } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
import { AppShell, Burger, Group, Skeleton, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Suggestion {
  title: string,
  subtitle: string,
}
const DEFAULT_SUGGESTIONS: Array<Suggestion> = [
  {
    title: "Make a content strategy",
    subtitle: "for a newsletter featuring free local weekend events",
  },
  {
    title: "Suggest some names",
    subtitle: "for my cafe-by-day, bar-by-night business",
  },
  {
    title: 'Explain this code',
    subtitle: "'cat config.yaml | awk NF'",
  },
  {
    title: "Create a charter",
    subtitle: "to start a film club",
  },
]

const WelcomeMessage = () => {
  const MESSAGE = "How can I help you today?";
  return (
    <>
      <IconBrandMantine
        style={{ width: rem(80), height: rem(80) }}
        stroke={1.5}
        color="var(--mantine-color-blue-filled)"
      />
      <Text size="xl">{MESSAGE}</Text>
    </>
  )
}

const InitialView = () => (
  <>
    <WelcomeMessage />
    <Grid>
      { DEFAULT_SUGGESTIONS.map((suggestion, index) => (
        <Grid.Col span={6}>
          <SuggestionBlock key={index} {...suggestion} />
        </Grid.Col>
      ))}
    </Grid>
  </>
)

export default function HomePage() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [isChatStarted, setIsChatStarted] = useState(true);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <IconBrandMantine size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container px={0} size="45rem">
          {isChatStarted ? <ChatContainer messages={messages}/> : <InitialView />}
          <UserInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
