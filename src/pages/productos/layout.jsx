import ContactSection from "@/components/ContactSection";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function ProductsLayout({children}){
    return(
        <>
            <Head>
                <title>Almacen Buenavida - Productos</title>
                <meta name='description' content='Pagina web de almacen buenavida'></meta>
            </Head>

            <Nav />
            <section className="w-full h-auto min-h-screen pt-4 bg-slate-100 px-4">
                {children}
            </section>
            <ContactSection />
        </>
    )
}