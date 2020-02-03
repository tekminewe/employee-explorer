import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-align: center;
`

export const SubordinateContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-self: center;
`

export const Employee = styled.span`
  text-decoration: underline;
`

export const SubordinateList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const SubordinateListItem = styled.li`
  margin-bottom: 0.5rem;
`