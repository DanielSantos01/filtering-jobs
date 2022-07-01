import React from 'react';

import { Header, JobsList } from '../../components';
import { Section } from './styles';

const Main: React.FC = () => {
  return (
    <Section>
      <Header />
      <JobsList />
    </Section>
  );
};

export default Main;
