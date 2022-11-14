import {MBblockquote} from './mb-blockquote.js';

export default {
    title: 'mb-blockquote',
    component : MBblockquote,
  parameters: {
    layout: 'centered',
    "background-color": 'red',
  },
};

const Template = (args) => {
    return `<mb-blockquote></mb-blockquote>`;
};

export const MyDefault = Template.bind({});
MyDefault.args = {
    label: 'Button',
};