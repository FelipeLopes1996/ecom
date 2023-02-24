import { screen } from '@testing-library/react';
import { CarouselCard } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CarouselCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
