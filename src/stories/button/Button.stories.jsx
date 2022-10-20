import React from 'react';
// import { storiesOf } from '@storybook/react';
// import withKnobs from 'with-knobs';
import { SButton } from './Button';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Composants-Base/Button',
  component: SButton,
};

const Template = (args) => <SButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  themeColor:'primary',
  size:'small'
};

export const Empty = Template.bind({});
Empty.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'refresh',
  label: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  onClick: action('buttonClicked'),
  label: 'This is a text',
};