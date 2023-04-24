import { CartContextProvider } from '@/context/CartContext'
import { NavContextProvider } from '@/context/NavContext'
import { CategoryContextProvider } from '@/context/CategoriesContext'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <CategoryContextProvider>
          <NavContextProvider>
            <Component {...pageProps} />
          </NavContextProvider>
        </CategoryContextProvider>
      </CartContextProvider>
    </>
  )
}
