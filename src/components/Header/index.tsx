import React, { useCallback } from 'react';

import { HeaderProps } from './interfaces';
import {
  Container,
  ImageContent,
  FiltersSection,
  Clear,
  FiltersContainer,
  Close,
  ItemContainer,
  Label,
} from './styles';

const Header: React.FC<HeaderProps> = ({ filters, clearFilters, removeFilter }) => {
  const renderFilters = useCallback((): JSX.Element[] => {
    const items: JSX.Element[] = filters.map((filter) => (
      <ItemContainer key={filter}>
        <Label>{filter}</Label>
        <Close
          onClick={() => removeFilter(filter)}
          src={require('../../assets/icon-remove.svg').default}
        />
      </ItemContainer>
    ));

    return items;
  }, [filters, removeFilter]);

  return (
    <Container>
      <ImageContent src={require('../../assets/bg-header-desktop.svg').default} />
      <FiltersSection isVisible={!!filters.length}>
        <FiltersContainer>{renderFilters()}</FiltersContainer>
        <Clear onClick={clearFilters}>Clear</Clear>
      </FiltersSection>
    </Container>
  );
};

export default Header;
