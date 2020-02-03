import React from 'react';
import { Title, AlertIcon, Container } from './general_error_message.styles';

const GeneralErrorMessage = () => (
  <Container>
    <AlertIcon />
    <Title>Opps something went wrong</Title>
  </Container>
);

export default GeneralErrorMessage;