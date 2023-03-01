import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';
import props from './mock';
import { screen } from '@testing-library/react';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: 'Jeferson Oliveira' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Jeferson Oliveira/i }),
    ).toHaveAttribute('src', props.logo);

    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: 'Jeferson Oliveira' }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: /Jeferson Oliveira/i }),
    ).toHaveAttribute('src', props.logo);
    expect(screen.queryByRole(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
