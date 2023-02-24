import { screen } from '@testing-library/react';
import { InfoHeader } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<InfoHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
