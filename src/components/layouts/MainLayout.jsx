import Nav from '@/components/Nav'
import ContactSection from '@/components/ContactSection'
import Head from 'next/head'

export default function MainLayout({children}){
    return(
        <>
            <Head>
                <title>Almacen Buenavida</title>
                <meta name='description' content='Pagina web de almacen buenavida'></meta>
            </Head>
            <Nav />
            {children}
            <ContactSection />
        </>
    )
}