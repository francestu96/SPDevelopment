import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import "../globals.css"
import 'swiper/css';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors: { "main": "#588fd1" } });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
        <Analytics/>
    </ChakraProvider>
  );
};

export default MyApp;
