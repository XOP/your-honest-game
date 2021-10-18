import React from "react";
import { Provider } from "react-redux";

import { Page } from "../src/components/features/page/Page";

import store from "../src/redux/configure";

import "@csstools/normalize.css";
import "choom/lib/theme/theme.css";
import "../src/assets/theme/theme.css";
import "../src/assets/theme/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
};

export default App;
