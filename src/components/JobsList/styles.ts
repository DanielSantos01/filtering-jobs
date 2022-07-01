import styled from 'styled-components';

export const Container = styled.ul`
  overflow-y: scroll;
  margin-top: 20vh;
  width: 100%;
  padding: 0px 15px;

  @media(max-width: 670px) {
    margin-top: 12vh;
  }
`;
