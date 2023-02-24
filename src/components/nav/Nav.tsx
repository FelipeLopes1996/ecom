import { screen } from '@testing-library/react';
import { Nav } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<Nav />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
