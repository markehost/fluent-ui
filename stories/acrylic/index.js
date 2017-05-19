import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Acrylic from '../../components/acrylic/index';

storiesOf('Acrylic', module)
  .add('default view', () => (
    <Acrylic onClick={ action('Acrylic clicked') }>Hello</Acrylic>
  ))
  .add('some emojies as the text', () => (
    <Acrylic>😀 😎 👍 💯</Acrylic>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Acrylic style={ style }>Hello</Acrylic>
    );
  });
