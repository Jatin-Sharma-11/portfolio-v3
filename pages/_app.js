import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/sora/700.css';
import customTheme from '../styles/theme';

 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({showSpinner:false, color:"#1e847f"})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
