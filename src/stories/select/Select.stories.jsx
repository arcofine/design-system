import React from 'react';
import { SSelect } from './Select';


const list = ["Parc de la Chute-Montmorency","Parc National de la Jacques-Cartier"];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Composants-Base/Select',
  component: SSelect,
};

const Template = (args) => <div style={{width: '50%'}} ><SSelect {...args} /></div>;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  size:'small',
  data:list
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  size:'large',
  data:list,
  loading:true
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  size:'large',
  data:list,
  disabled:true
};