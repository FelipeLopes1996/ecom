import { screen } from '@testing-library/react';
import { Slider } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<Slider />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
