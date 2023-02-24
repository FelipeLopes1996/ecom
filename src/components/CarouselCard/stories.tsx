import { Meta, Story } from '@storybook/react/types-6-0';
import { CarouselCard, CarouselCardColectionProps } from '.';

export default {
  title: 'CardColection',
  component: CarouselCard,
} as Meta;

export const Template: Story<CarouselCardColectionProps> = (args) => {
  return (
    <div>
      <CarouselCard {...args} />
    </div>
  );
};
