import CloneMe from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
