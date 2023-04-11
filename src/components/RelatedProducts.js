import RelatedProductsCard from "./RelatedProductsCard"
import Link from "next/link"

export default function RelatedProducts() {
    const products = [
        {
            src: "/alfajores.png",
            id: 1,
            name: "alfajores de arroz",
            alt: "alfajores",
            price: "$2000.00",
            stock: true,
        },
        {
            src: "/lulemuu.png",
            id: 2,
            name: "lulemuu",
            alt: "alfajores",
            price: "$2000.00",
            stock: false,

        },
        {
            src: "/spirulana.png",
            id: 3,
            name: "spirulana",
            alt: "alfajores",
            price: "$2000.00",
            stock: true,
        },
        {
            src: "/spirulana.png",
            id: 4,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: true,
        },

    ]

    return (
        <div className="w-full h-auto min-h-screen bg-slate-50 pt-10">
            <div className="p-4">
                <h4 className="text-black text-xl font-bold mb-4">PRODUCTOS RELACIONADOS</h4>
                <ul className='w-full h-full flex justify-evenly flex-wrap py-8'>
                    {products.map((product) => (
                        <RelatedProductsCard
                            key={product.id}
                            productSrc={product.src}
                            productName={product.name}
                            productStock={product.stock}
                            productPrice={product.price}
                            productId={product.id}
                        />

                    ))}
                </ul>
                <Link className='w-full h-full flex justify-center items-center mb-40' href={"/categories"}>
                    <button className='w-[300px] h-auto p-4 bg-green-500 text-white rounded font-semibold' type='text'>VER MÁS PRODUCTOS</button>
                </Link>
            </div>
        </div>
    )
}