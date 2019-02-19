import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import options from './options'

addDecorator(withOptions(options))
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
