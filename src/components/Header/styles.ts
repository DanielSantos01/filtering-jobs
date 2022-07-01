import styled from 'styled-components';
import { FilterProps } from './interfaces';

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

export const FiltersSection = styled.div<FilterProps>`
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  padding: 10px 10px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  position: fixed;
  margin-top: -25px;
  width: 90vw;
  margin-left: 5vw;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin: 3px 5px 3px 0px;
`;

export const Label = styled.p`
  font-weight: var(--bold-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--desatured-dark-cyan);
  background-color: var(--background-grayish-cyan);
  padding: 4px;
`;

export const Close = styled.img`
  padding: 4px;
  background-color: var(--desatured-dark-cyan);
  transition: 0.2s;

  :hover {
    cursor: pointer;
    background-color: var(--black);
  }
`;

export const Clear = styled.p`
  font-weight: var(--normal-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--desatured-dark-cyan);

  :hover {
    cursor: pointer;
  }
`;
