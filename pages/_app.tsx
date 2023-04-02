import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";

import "@styles/globals.scss";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {

 const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;