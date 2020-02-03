import React, { useState } from 'react';
import { SearchTextContainer, Container, TitleContainer, SearchTextField, SearchButton, Title } from './home.styles';

const HomePage = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    const { target } = event;
    const { value } = target;

    setSearchTerm(value);
  }

  const handleSearch = () => {
    history.push(`/overview/${searchTerm}`);
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Employee Explorer</Title>
      </TitleContainer>
      <SearchTextContainer>
        <SearchTextField data-testid="text_field" onChange={handleSearchTermChange} placeholder="Search employee" />
        <br/>
        <SearchButton data-testid="search_button" onClick={handleSearch}>Search</SearchButton>
      </SearchTextContainer>
    </Container>
  );
}

export default HomePage;
