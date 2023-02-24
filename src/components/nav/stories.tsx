import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderMeProps } from '.';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Template: Story<HeaderMeProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
