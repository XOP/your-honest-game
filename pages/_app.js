import React from "react";
import { Provider } from "react-redux";
import Script from "next/script";

import { Page } from "../src/components/features/page/Page";

import store from "../src/redux/configure";

import { useTheme } from "../src/utils/useTheme";

import {
  ThemeProvider,
  themeDefault,
  themeAlternative,
} from "../src/assets/theme/theme";

import "@csstools/normalize.css";
import "choom/lib/theme/theme.css";
import "../src/assets/theme/theme.css";
import "../src/assets/theme/index.css";

const App = ({ Component, pageProps }) => {
  const [theme, toggleTheme] = useTheme(themeDefault, themeAlternative);

  return (
    <Provider store={store}>
      <ThemeProvider value={[theme, toggleTheme]}>
        <Page>
          <Component {...pageProps} />
          <Script id="yhg-theme">
            {`!(function () {
              function t(t) {
                document.documentElement.setAttribute("data-theme", t);
              }
              var e = (function () {
                var t = null;
                try {
                  t = localStorage.getItem("theme");
                } catch (t) {}
                return t;
              })();
              t(null !== e ? e : "light");
            })()`}
          </Script>
        </Page>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
