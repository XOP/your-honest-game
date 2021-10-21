import React from "react";
import { Provider } from "react-redux";
import Script from "next/script";

import { Page } from "../src/components/features/page/Page";

import store from "../src/redux/configure";

import { useTheme } from "../src/utils/useTheme";
import { useSetting } from "../src/utils/useSetting";

import {
  ThemeProvider,
  themeDefault,
  themeAlternative,
} from "../src/assets/theme/theme";

import { SettingsProvider } from "../src/context/settings";

import "@csstools/normalize.css";
import "choom/lib/theme/theme.css";
import "../src/assets/theme/theme.css";
import "../src/assets/theme/index.css";

const App = ({ Component, pageProps }) => {
  const [theme, toggleTheme] = useTheme(themeDefault, themeAlternative);
  const [sound, toggleSound] = useSetting('sound', true);
  const [vibration, toggleVibration] = useSetting('vibration', false);

  return (
    <Provider store={store}>
      <ThemeProvider value={[theme, toggleTheme]}>
        <SettingsProvider value={{
          sound: [sound, toggleSound],
          vibration: [vibration, toggleVibration]
        }}>
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
        </SettingsProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
