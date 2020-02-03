import React from 'react';
import { Container, Title, NotFoundIcon } from './not_found_error_message.styles';

const NotFoundErrorMessage = () => (
  <Container>
    <NotFoundIcon />
    <Title>Employee not found</Title>
  </Container>
);

export default NotFoundErrorMessage;
