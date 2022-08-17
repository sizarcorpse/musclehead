import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import { SWRConfig } from "swr";
import ThemeConfig from "themes/";
import { createEmotionCache } from "utils/";

import { MHHeader } from "components/layouts/";

const clientSideEmotionCache = createEmotionCache();
export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeConfig>
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <MHHeader>
            <Component {...pageProps} />
          </MHHeader>
        </SWRConfig>
      </ThemeConfig>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
