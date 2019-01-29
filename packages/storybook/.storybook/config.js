import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
