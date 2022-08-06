import '../styles/globals.css'
import Header from "../components/header/Header"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import Footer from '../components/footer/Footer'
config.autoAddCss = true

function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer />
  </>
  
  
}

export default MyApp
