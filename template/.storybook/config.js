import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';

import GlobalStyle from '../src/theme/global';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

addDecorator(withKnobs);
addDecorator(withPropsTable);
addDecorator(story => (
  <>
    <GlobalStyle />

    {story()}
  </>
));
