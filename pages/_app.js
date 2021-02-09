import Head from 'next/head';

import { wrapper } from '@data/configureStore';

const AnimalPhy = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>AnimalPhy</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(AnimalPhy);
