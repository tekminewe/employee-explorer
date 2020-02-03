import React, { useEffect, useState } from 'react';
import { Container, TitleContainer, SubordinateContainer, SubordinateList, SubordinateListItem, Employee, Title } from './overview.styles';
import { getSubordinateForEmployee } from '../../models/employee';
import NotFoundError from '../../errors/not_found_error';
import NotFoundErrorMessage from '../../components/not_found_error_message';
import GeneralErrorMessage from '../../components/general_error_message';
import { Spinner } from '../../components/common/spinner';

const OverviewPage = ({ match }) => {
  const [subordinates, setSubordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { params } = match;
  const { id } = params;

  useEffect(() => {
    const getSubordinate = async () => {
      try {
        const subs = await getSubordinateForEmployee(id);
        setSubordinates(subs);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    }

    getSubordinate();
  }, [id]);

  if (error) {
    if (error instanceof NotFoundError) {
      return <NotFoundErrorMessage />;
    } else {
      return <GeneralErrorMessage />
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Employee Overview</Title>
      </TitleContainer>
      <SubordinateContainer>
        {loading ? (
          <Spinner data-testid="loading" />
        ): (
          <>
            <p>Subordinates of employee <Employee>{id}</Employee></p>
            <SubordinateList>
            {subordinates.map((subordinate, index) => (
              <SubordinateListItem key={index}>{subordinate}</SubordinateListItem>
            ))}
            </SubordinateList>
          </>
        )}
      </SubordinateContainer>
    </Container>
  );
}

export default OverviewPage;
