import GlobalStyles from 'components/styles';
import darkTheme from 'components/styles/theme/dark';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/fonts.css';

function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
         </ThemeProvider>
      </>
   );
}

export default App;
