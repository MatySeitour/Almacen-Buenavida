import { CartContextProvider } from '@/context/CartContext'
import { NavContextProvider } from '@/context/NavContext'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <NavContextProvider>
          <Component {...pageProps} />
        </NavContextProvider>
      </CartContextProvider>
    </>
  )
}
