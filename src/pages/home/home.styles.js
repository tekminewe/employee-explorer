import styled from 'styled-components';
import Button from '../../components/common/button';
import TextField from '../../components/common/text_field';

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

export const SearchButton = styled(Button)`
  @media screen and (min-width: 1080px) {
    display: flex;
    flex: 0.5;
    justify-content: center;
    margin-left: 1rem;
  }
`

export const SearchTextField = styled(TextField)`
  @media screen and (min-width: 1080px) {
    display: flex;
    flex: 2;
  }
`

export const SearchTextContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-self: center;
  width: 90vw;

  @media screen and (min-width: 1080px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 0;
    max-width: 50vw
  }
`