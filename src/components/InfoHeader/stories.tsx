import { Meta, Story } from '@storybook/react/types-6-0';
import { InfoHeader, InfoHeaderProps } from '.';

export default {
  title: 'InfoHeader',
  component: InfoHeader,
} as Meta;

export const Template: Story<InfoHeaderProps> = (args) => {
  return (
    <div>
      <InfoHeader {...args} />
    </div>
  );
};
