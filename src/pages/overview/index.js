import React, { useEffect, useState } from 'react';
import { Container, TitleContainer, SubordinateContainer, SubordinateList, SubordinateListItem, Employee, Title } from './overview.styles';
import { getSubordinateForEmployee } from '../../models/employee';

const OverviewPage = ({ match }) => {
  const [subordinates, setSubordinates] = useState([]);

  const { params } = match;
  const { id } = params;

  useEffect(() => {
    const getSubordinate = async () => {
      const subs = await getSubordinateForEmployee(id);
      setSubordinates(subs);
    }

    getSubordinate();
  }, [id]);

  return (
    <Container>
      <TitleContainer>
        <Title>Employee Overview</Title>
      </TitleContainer>
      <SubordinateContainer>
        <p>Subordinates of employee <Employee>{id}</Employee></p>
        <SubordinateList>
        {subordinates.map((subordinate, index) => (
          <SubordinateListItem key={index}>{subordinate}</SubordinateListItem>
        ))}
        </SubordinateList>
      </SubordinateContainer>
    </Container>
  );
}

export default OverviewPage;
