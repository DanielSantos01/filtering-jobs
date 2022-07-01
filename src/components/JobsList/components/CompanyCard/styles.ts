import styled from 'styled-components';
import { CardProps, ContainerProps } from './interfaces';

export const Container = styled.li<ContainerProps>`
  width: 100%;
  padding: 10px 20px;
  margin: 50px 0px;
  border: 1px solid var(--black);
  border-radius: 5px;
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  flex-direction: row;

  @media(max-width: 670px) {
    flex-direction: column;
    margin: 65px 0px;
  }
`;

export const CompanyInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  @media(max-width: 670px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SkillsInfo = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;

  @media(max-width: 670px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  width: var(--logo-dimension);
  height: var(--logo-dimension);
  margin-right: 20px;
  object-fit: contain;

  @media(max-width: 670px) {
    margin-top: var(--mobile-logo-rescue)
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 670px) {
    margin-top: 10px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
`;

export const Title = styled.p`
  font-weight: var(--normal-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--desatured-dark-cyan);
  margin-right: 10px;
`;

export const Card = styled.p<CardProps>`
  font-weight: var(--normal-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--background-grayish-cyan);
  padding: 4px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 10px;

  ${({ isNew, isFeatured, evaluating }) => {
    if(!isNew && !isFeatured) return 'display: none;';

    if(evaluating === 'new' && isNew) return 'background-color: var(--company-name);';

    if(evaluating === 'featured' && isFeatured) return 'background-color: var(--black);';
  }}
`;

export const Position = styled.p`
  font-weight: var(--bold-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--black);

  @media(max-width: 670px) {
    margin: 5px 0px;
  }
`;

export const Description = styled(Title)`
  color: var(--black);
  margin-right: 4px;
`;

export const Skill = styled.p`
  font-weight: var(--normal-weight);
  font-size: var(--font-size);
  font-family: var(--primary-font), sans-serif;
  color: var(--black);
  padding: 1px 4px;
  height: 25px;
  border: 1px solid var(--black);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px 0px 3px 10px;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: var(--desatured-dark-cyan);
    border: 1px solid var(--background-grayish-cyan);
    color: var(--background-grayish-cyan);
  }

  @media(max-width: 670px) {
    padding: 4px;
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 10px;
  }
`;
