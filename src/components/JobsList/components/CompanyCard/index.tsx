import React, { useCallback, useMemo } from 'react';

import { CompanyCardInterface } from './interfaces';
import {
  CompanyInfo,
  Container,
  SkillsInfo,
  Logo,
  ExtraInfoContainer,
  RowContainer,
  Title,
  Card,
  Position,
  Description,
  Skill,
} from './styles';

const CompanyCard: React.FC <CompanyCardInterface> = ({ data }) => {
  const {
    logo,
    role,
    level,
    tools,
    company,
    position,
    postedAt,
    contract,
    location,
    languages,
    new: isNew,
    featured: isFeatured,
  } = data;

  const skills: string[] = useMemo(() => {
    return [role, level, ...languages, ...tools];
  }, [role, level, languages, tools]);

  const renderSkills = useCallback((): JSX.Element[] => {
    const items: JSX.Element[] = skills.map((skill) => <Skill>{skill}</Skill>);
    return items;
  }, [skills]);

  return (
    <Container>
      <CompanyInfo>
        <Logo src={logo} />
        <ExtraInfoContainer>
          <RowContainer>
            <Title>{company}</Title>
            <Card isNew={isNew} isFeatured={isFeatured} evaluating="new">New</Card>
            <Card isNew={isNew} isFeatured={isFeatured} evaluating="featured">Featured</Card>
          </RowContainer>

          <Position>{position}</Position>

          <RowContainer>
            <Description>{postedAt}</Description>
            <Description>{contract}</Description>
            <Description>{location}</Description>
          </RowContainer>
        </ExtraInfoContainer>
      </CompanyInfo>

      <SkillsInfo>{renderSkills()}</SkillsInfo>
    </Container>
  );
};

export default CompanyCard;
