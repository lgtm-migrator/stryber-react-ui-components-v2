import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['onChange', 'label', 'placeholder', 'disabled', 'hint', 'errorMessage',
    'value', 'name', 'controlled', 'onBlur', 'prefix', 'prefixClassName', 'errorClassName', 'hintClassName'
    , 'endAdornment', 'mask', 'fullWidth']),
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 10,
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const DefaultInputs = Template.bind({});
DefaultInputs.args = {
  min: 0,
  max: 10,
  thumbLabels: 'input'
};
DefaultInputs.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const Range = Template.bind({});
Range.args = {
  rangeSlider: true,
};
Range.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const CustomStep = Template.bind({});
CustomStep.args = {
  step: 2,
  showStepMarks: true,
};
CustomStep.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const RangeInputs = Template.bind({});
RangeInputs.args = {
  rangeSlider: true,
  step: 2,
  thumbLabels: 'input'
};
RangeInputs.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];
export const RangeMinDistance = Template.bind({});
RangeMinDistance.args = {
  minValue: 6,
  maxValue: 10,
  rangeSlider: true,
  minDistance: 2,
};
RangeMinDistance.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];

export const StepDotsIndicator = Template.bind({});
StepDotsIndicator.args = {
  min: 0,
  max: 10,
  showStepMarks: true
};
StepDotsIndicator.decorators = [
  (Story) => (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];