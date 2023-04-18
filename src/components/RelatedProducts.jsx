import RelatedProductsCard from "./RelatedProductsCard"
import Link from "next/link"

export default function RelatedProducts({productsRelated}) {

    return (
        <div className="w-full h-auto min-h-screen bg-slate-50 pt-10 border-t border-green-200">
            <div className="p-4 h-auto">
                <div>
                    <h4 className="text-green-800 text-xl font-bold mb-4 underline-subtitle relative inline-block">PRODUCTOS RELACIONADAS</h4>
                </div>
                <ul className='w-full h-full flex justify-between flex-wrap py-8'>
                    {productsRelated.map((product) => (
                        <RelatedProductsCard
                            key={product.id}
                            productSrc={product.src}
                            productName={product.name}
                            productStock={product.stock}
                            productPrice={product.price}
                            productId={product.id}
                            productOffer={product.offer}
                        />

                    ))}
                </ul>
                <Link className='w-full h-full flex justify-center items-center mb-10' href={"/productos"}>
                    <button className='w-[300px] h-auto p-4 bg-green-500 text-white rounded font-semibold' type='text'>VER MÁS PRODUCTOS</button>
                </Link>
            </div>
        </div>
    )
}