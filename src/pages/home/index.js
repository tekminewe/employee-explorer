import React from 'react';
import { SearchTextContainer, Container, TitleContainer, SearchTextField, SearchButton, Title } from './home.styles';

const HomePage = () => (
  <Container>
    <TitleContainer>
      <Title>Employee Explorer</Title>
    </TitleContainer>
    <SearchTextContainer>
      <SearchTextField placeholder="Search employee" />
      <br/>
      <SearchButton>Search</SearchButton>
    </SearchTextContainer>
  </Container>
);

export default HomePage;
