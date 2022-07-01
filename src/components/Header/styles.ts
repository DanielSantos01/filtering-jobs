import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100vw;
  height: 20vh;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  @media(max-width: 670px) {
    height: 12vh;
  }
`;
export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;
