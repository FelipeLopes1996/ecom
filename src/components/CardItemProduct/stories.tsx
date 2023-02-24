import { Meta, Story } from '@storybook/react/types-6-0';
import { CardItemProduct, CardItemsTypes } from '.';

export default {
  title: 'CardItemProduct',
  component: CardItemProduct,
} as Meta;

export const Template: Story<CardItemsTypes> = (args) => {
  return (
    <div>
      <CardItemProduct {...args} />
    </div>
  );
};
