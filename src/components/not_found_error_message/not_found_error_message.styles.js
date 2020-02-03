import styled from 'styled-components';
import { ReactComponent as NotFoundSvg } from '../../assets/unknown.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Title = styled.h1`
  text-align: center;
`

export const NotFoundIcon = styled(NotFoundSvg)`
  width: 40%;
  height: 40%;
`
