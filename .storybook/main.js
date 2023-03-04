module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    previewMdx2: true,
  },
};
