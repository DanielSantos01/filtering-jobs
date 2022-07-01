import React, { useCallback } from 'react';

import jobs from './dataset';
import { JobsListProps } from './interfaces';
import { CompanyCard } from './components';
import { Container } from './styles';

const JobsList: React.FC<JobsListProps> = ({ filters, handleFilters }) => {
  const renderItems = useCallback((): JSX.Element[] => {
    const items: JSX.Element[] = jobs.map((data) => (
      <CompanyCard
        key={data.id.toString()}
        data={data}
        handleFilters={handleFilters}
        filters={filters}
      />
    ));
    return items;
  }, [handleFilters, filters]);

  return <Container>{renderItems()}</Container>;
};

export default JobsList;
