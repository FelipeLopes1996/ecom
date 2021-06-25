import { screen } from '@testing-library/react';
import { renderTheme } from "../../styles/render-theme"
import {CloneMe} from '.';

describe('<CloneMe />', () => {
  interface('should render', () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
