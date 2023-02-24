import { Meta, Story } from '@storybook/react/types-6-0';
import { Slider } from '.';

export default {
  title: 'CardColection',
  component: Slider,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Slider {...args} />
    </div>
  );
};
