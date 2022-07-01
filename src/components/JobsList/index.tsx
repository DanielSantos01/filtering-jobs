import React, { useCallback } from 'react';

import jobs from './dataset';
import { CompanyCard } from './components';
import { Container } from './styles';

const JobsList: React.FC = () => {
  const renderItems = useCallback((): JSX.Element[] => {
    const items: JSX.Element[] = jobs.map((data) => <CompanyCard data={data} />);
    return items;
  }, []);

  return <Container>{renderItems()}</Container>;
};

export default JobsList;
