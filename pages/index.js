/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create state for markdown with default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real time 
*/

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  }
`;

const Preview = styled(ReactMarkdown)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
`;

const Index = () => {
  const [markdown, setMarkdown] = useState('## markdown preview');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <Container>
      <TextArea
        value={markdown}
        onChange={handleChange}
        placeholder="Type markdown here"
      />

      <Preview>{markdown}</Preview>
    </Container>
  );
};

export default Index;