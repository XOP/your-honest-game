import React from 'react';

import { Page } from '../src/components/features/page/Page';

import "@csstools/normalize.css";
import "choom/lib/theme/theme.css";
import '../src/assets/theme/theme.css';
import '../src/assets/theme/index.css';

const App = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>    
  );
};

export default App;
