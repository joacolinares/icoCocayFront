/* eslint-disable */

import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import {  PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import App from './app';
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
      <ThirdwebProvider
      // activeChain={BinanceTestnet}
      activeChain={PolygonAmoyTestnet}
      clientId="95347962d3e713129610a9c9f4dbce58"
    >
        <App />
        </ThirdwebProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
/* eslint-disable */
