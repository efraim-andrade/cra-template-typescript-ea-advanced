import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ExampleComponent({ color, title }) {
  return (
    <Container color={color}>
      <h1>{title}</h1>
    </Container>
  );
}

ExampleComponent.defaultProps = {
  color: '#55F',
  title: 'Hello World',
};

ExampleComponent.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};
