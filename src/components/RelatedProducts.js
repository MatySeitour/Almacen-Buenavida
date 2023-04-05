import RelatedProductsCard from "./RelatedProductsCard"

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
        <div className="w-full h-auto min-h-screen bg-slate-400 pt-10">
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
                        />

                    ))}
                </ul>
            </div>
        </div>
    )
}