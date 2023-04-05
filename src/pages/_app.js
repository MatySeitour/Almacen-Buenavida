import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { CartContextProvider } from '@/context/CartContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Nav />
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}
