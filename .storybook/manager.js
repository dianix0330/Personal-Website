import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://daniel-ayala.netlify.app//icon.svg',
    brandTitle: 'Daniel Ayala Components',
    brandUrl: 'https://daniel-ayala.netlify.app/',
  },
});
