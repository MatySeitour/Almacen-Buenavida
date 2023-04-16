import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { CartContextProvider } from '@/context/CartContext'
import { NavContextProvider } from '@/context/NavContext'
import ContactSection from '@/components/ContactSection'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <NavContextProvider>
          <Nav />
          <Component {...pageProps} />
          <ContactSection />
        </NavContextProvider>
      </CartContextProvider>
    </>
  )
}
