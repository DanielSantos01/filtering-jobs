import React from 'react';

import {
  Container,
  ImageContent,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ImageContent src={require('../../assets/bg-header-desktop.svg').default} />
    </Container>
  );
};

export default Header;
