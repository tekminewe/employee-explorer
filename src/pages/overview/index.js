import React, { useEffect, useState } from 'react';
import { Container, TitleContainer, SubordinateContainer, SubordinateList, SubordinateListItem, Employee, Title } from './overview.styles';
import { getSubordinateForEmployee } from '../../models/employee';

const OverviewPage = () => {
  const [subordinates, setSubordinates] = useState([]);

  useEffect(() => {
    const getSubordinate = async () => {
      const subs = await getSubordinateForEmployee();
      setSubordinates(subs);
    }

    getSubordinate();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>Employee Overview</Title>
      </TitleContainer>
      <SubordinateContainer>
        <p>Subordinates of employee <Employee>Employee 1</Employee></p>
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
