import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<Header>ola</Header>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
