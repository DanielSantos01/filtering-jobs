import React, { useState, useCallback } from 'react';

import { Header, JobsList } from '../../components';
import { Section } from './styles';

const Main: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  console.log(filters);

  const handleFilter = useCallback((skill: string) => () => {
    const isAlreadySelected: boolean = filters.indexOf(skill) !== -1;
    if(isAlreadySelected) {
      setFilters(filters.filter((curr) => curr !== skill));
    } else {
      setFilters([...filters, skill]);
    }
  }, [filters]);

  return (
    <Section>
      <Header />
      <JobsList filters={filters} handleFilters={handleFilter} />
    </Section>
  );
};

export default Main;
