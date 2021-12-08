import '../styles/globals.css'
import Router from 'next/router'
import {useState} from 'react'
import Loader from '../components/Loader'
import NProgress from 'nprogress'
//import getConfig from 'next/config';

function MyApp({ Component, pageProps }) 
{
  //const { publicRuntimeConfig } = getConfig();
  const [loading, setLoading] = useState(false)
  NProgress.configure({
    showSpinner: true//publicRuntimeConfig.NProgressShowSpinner
 });

  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start();
    setLoading(true)
  
  })

  Router.events.on('routeChangeComplete', () => {
    console.log(`Loaded`)
    NProgress.done()
    setLoading(false)
  })

  Router.events.on('routeChangeError', () => {
    console.log(`Error`)})
    NProgress.done()
  
  
  
  
  return (
    <>
      {loading && <Loader />} 
      
      <Component {...pageProps} />
    
    
    </>
    //<Component {...pageProps} />

  )
}

export default MyApp
