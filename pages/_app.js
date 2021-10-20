import React from "react";
import { Provider } from "react-redux";

import { Page } from "../src/components/features/page/Page";

import store from "../src/redux/configure";

import { useTheme } from "../src/utils/useTheme";
import { ThemeProvider, themeDefault, themeAlternative } from "../src/assets/theme/theme";

import "@csstools/normalize.css";
import "choom/lib/theme/theme.css";
import "../src/assets/theme/theme.css";
import "../src/assets/theme/index.css";

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useTheme(themeDefault, themeAlternative);

  return (
    <Provider store={store}>
      <ThemeProvider value={[theme, setTheme]}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
