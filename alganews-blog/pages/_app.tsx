import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { light } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { nonNull } from 'rospiel-react_alganews-sdk/dist/utils/objectUtil';
import Error from 'next/error';

interface CustomAppProps extends NextPageProps { }

type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

export default function App({ Component, pageProps }: AppProps<CustomAppProps>) {
  if (nonNull(pageProps.error)) {
    return <Error statusCode={pageProps.error!.statusCode} title={pageProps.error!.message} />
  }
  
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      
      <GlobalStyles />
      <Footer />
    </ThemeProvider> 
  );
}
