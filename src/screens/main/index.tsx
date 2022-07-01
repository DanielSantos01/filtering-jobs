import React, { useState, useCallback } from 'react';

import { Header, JobsList } from '../../components';
import { Section } from './styles';

const Main: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  console.log(filters);

  const clearFilters = useCallback(() => {
    setFilters([]);
  }, []);

  const removeFilter = useCallback((filter: string) => {
    setFilters(filters.filter((curr) => curr !== filter));
  }, [filters]);

  const handleFilter = useCallback((skill: string) => () => {
    const isAlreadySelected: boolean = filters.indexOf(skill) !== -1;
    if(isAlreadySelected) {
      removeFilter(skill);
    } else {
      setFilters([...filters, skill]);
    }
  }, [filters, removeFilter]);

  return (
    <Section>
      <Header filters={filters} clearFilters={clearFilters} removeFilter={removeFilter} />
      <JobsList filters={filters} handleFilters={handleFilter} />
    </Section>
  );
};

export default Main;
