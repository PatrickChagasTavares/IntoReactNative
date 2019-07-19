import React from 'react';

import { Container, Text } from './styles';

export default function Main() {
  return (
    <Container>
      <Text>Page Main</Text>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuarios',
};
