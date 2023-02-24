import { screen } from '@testing-library/react';
import { CardColection } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CardColection />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
