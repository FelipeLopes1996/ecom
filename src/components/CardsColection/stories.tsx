import { Meta, Story } from '@storybook/react/types-6-0';
import { CardColection, CardColectionProps } from '.';

export default {
  title: 'CardColection',
  component: CardColection,
} as Meta;

export const Template: Story<CardColectionProps> = (args) => {
  return (
    <div>
      <CardColection {...args} />
    </div>
  );
};
