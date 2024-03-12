import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PInput from './PInput';
export default {
  title: '메모/Ui/Molecules/PInput',
  component: PInput,
} as ComponentMeta<typeof PInput>;

const template: ComponentStory<typeof PInput> = args => <><PInput {...args} /><PInput {...args} /></>;

export const Basic = template.bind({});
Basic.args = {
};
