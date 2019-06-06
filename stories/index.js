import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('default', () => (
        <Button color="danger">Danger!</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
