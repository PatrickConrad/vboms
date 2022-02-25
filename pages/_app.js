import {ContextProvider} from '../state/RootContext';
import {getDefault} from '../layouts';
import Styles from 'styleGuide';
import '../styles/globals.css'
import DefaultLayout from 'layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
  
const { metaData, ...rest } = pageProps;
  
  return (
  <ContextProvider>
    
      <Styles component = {(styles)=>{
          const getLayout = Component.getLayout ?? (()=> {
            return getDefault(<Component {...rest} styles={styles} />, styles)
          })

          return getLayout(<Component {...rest} styles={styles} />, metaData);
    }}/>
  </ContextProvider>
  )
}

export default MyApp


