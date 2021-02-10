import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '@data/configureStore';
import { GlobalStyle, darkTheme } from './globalStyle';

const AnimalPhy = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>AnimalPhy</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default wrapper.withRedux(AnimalPhy);
