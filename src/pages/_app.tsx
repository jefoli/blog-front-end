import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../contexts/BlogThemeContex';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </BlogThemeProvider>
  );
}
