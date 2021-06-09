import Head from 'next/head';

import Filters from '../components/Filters'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Seazone</title>
      </Head>
      <Header />
      <Filters />
      
      <Component {...pageProps} />

      <Footer />
    </>
  ) 
}

export default MyApp
