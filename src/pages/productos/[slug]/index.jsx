import Image from "next/image";
import Link from "next/link";
import getProducts from "../../../utils/products.json"
import getCategories from "../../../utils/categories.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CartHome from "@/components/CartHome";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import { useCategory } from "@/context/CategoriesContext";
import CategorySubLevel from "@/components/CategorySubLevel";

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params;
    return{
        props:{
            slug,
        }
    }
}

export default function slug({slug}){
    const {cartShow} = useCart();
    const {setSubCategoriesState, subCategoriesState} = useCategory();

    const [subLevelsState, setSubLevelsState] = useState(0);

    
    const categories = getCategories.categories;
    const categorySelected = categories.filter(category => category.slug == slug);

    const products = getProducts.products;
    const productsByCategory = products.filter(product => product.categoryId == categorySelected[0].id);
    const productsCategoryRelated = [];
    const as = [];
    const productsSubLevelByCategory = products.filter((product) => {
        product.subCategoriesId.map((subLevel) => {
            if(subLevel == subLevelsState){
                as.push(product)
                return product;
            }
        }) 
    });
    console.log(as);

    (() => {
        const productsCategoriesRelated = products.map((product) => {
            let res = product.categoriesRelated.filter((a) => {
               if(a == categorySelected[0].id){
                productsCategoryRelated.push(product);
               }
               else{
                return false;
               }
            });
            return res;
        });
    })();







    const handleSubLevelSelect = (id) => {
        if(id === subLevelsState){
            setSubLevelsState(0);
        }
        else{
            setSubLevelsState(id);
        }
    }


    const [categoriesFilterState, setCategoriesFilterState] = useState(false);

    return(
        <Layout>
            <section className="w-full h-auto min-h-screen pt-36 bg-slate-100">
                <div className="w-full h-auto p-2 mb-4">
                    <div className="w-[full] h-auto flex flex-row justify-center items-center px-2 mb-4">
                        <p className="w-[70%] text-center text-base text-green-500">{`Inicio > `} Productos{` > `} <b>{categorySelected[0].name}</b></p>
                    </div>
                    <div className="w-full h-auto">
                        <h2 className="text-center text-2xl text-green-500">{categorySelected[0].name}</h2>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-row justify-between p-2 mb-10">
                    <button onClick={() => setCategoriesFilterState(true)} className="w-[45%] shadow-default bg-green-500 h-auto flex justify-center items-center p-3 rounded-lg">
                        <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faArrowDownWideShort} />
                        <p className="ml-3 tracking-wide text-white font-medium">CATEGORIAS</p>
                    </button>
                    <button type="text" className="w-[45%] shadow-default h-auto flex bg-green-500 justify-center items-center p-3 rounded-lg">
                        <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faFilter} />
                        <p className="ml-3 tracking-wide text-white font-medium">ORDENAR</p>
                    </button>
                </div>

                <div className="w-full h-auto relative flex flex-col justify-center items-center mb-10">
                    <div className={categorySelected[0].subLevels ? "w-full h-auto mb-4": "hidden"}>
                        <h4 className="ml-3 tracking-wide text-green-500 font-semibold text-xl">{`CATEGORIAS DE ${categorySelected[0].name.toUpperCase()}`}</h4>
                    </div>
                    <ul className={"w-[90%] h-[auto] bg-white shadow-md rounded-md transition-all p-4 flex flex-row justify-start items-center flex-wrap gap-3"}>
                        {categorySelected[0].subLevels.map((subLevel) => (
                            <li onClick={() => handleSubLevelSelect(subLevel.id)} key={subLevel.id} className={subLevelsState !== subLevel.id ? "bg-gray-400 p-2 text-white rounded-md transition-all" : "bg-green-500 p-2 text-white rounded-md transition-all"}>{subLevel.name}</li>
                        ))}
                    </ul>
                </div>

                

                <ul className="w-full h-full flex justify-evenly flex-wrap py-8">
                    {subLevelsState == 0 ? productsCategoryRelated.map((product) => (
                        <li className="relative w-[150px] h-[280px] rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center" key={product.id}>
                            <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-default flex flex-col items-center">
                                <Link className="w-full h-[140px] mb-2" href={`/products/${product.id}`}>
                                    <figure className="mb-2 w-full h-[140px]">
                                        <Image className="object-cover rounded-t-md object-center w-full h-full"  priority={true} width={140} height={140} src={product.src} alt={product.name} />
                                    </figure>
                                </Link>
                                <div className="w-full h-full flex justify-around items-center flex-col">
                                    <div className="w-full h-[32px] text-left pl-2 mb-2">
                                        <h4 className="text-green-700 text-xs font-bold">
                                            {product.name.length > 40 ? `${product.name.slice(0, 40)}...` : product.name}
                                        </h4>
                                    </div>
                                    <div className="w-full text-left pl-2 mb-2">
                                        <p className="text-green-700 text-base font-bold tracking-wide mr-2">
                                            {`$${product.price}`}
                                        </p>
                                    </div>
                                    <div className="w-full px-2 h-auto flex justify-start mb-2">
                                        <button className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center" type="text">
                                            <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                    
                    :

                    <>
                    {as.map((product) => (
                        <li className="relative w-[150px] h-[280px] rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center" key={product.id}>
                            <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-default flex flex-col items-center">
                                <Link className="w-full h-[140px] mb-2" href={`/products/${product.id}`}>
                                    <figure className="mb-2 w-full h-[140px]">
                                        <Image className="object-cover rounded-t-md object-center w-full h-full"  priority={true} width={140} height={140} src={product.src} alt={product.name} />
                                    </figure>
                                </Link>
                                <div className="w-full h-full flex justify-around items-center flex-col">
                                    <div className="w-full h-[32px] text-left pl-2 mb-2">
                                        <h4 className="text-green-700 text-xs font-bold">
                                            {product.name.length > 40 ? `${product.name.slice(0, 40)}...` : product.name}
                                        </h4>
                                    </div>
                                    <div className="w-full text-left pl-2 mb-2">
                                        <p className="text-green-700 text-base font-bold tracking-wide mr-2">
                                            {`$${product.price}`}
                                        </p>
                                    </div>
                                    <div className="w-full px-2 h-auto flex justify-start mb-2">
                                        <button className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center" type="text">
                                            <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    </>
                }
                </ul>

                <CategoriesFilter
                    categoriesFilterState={categoriesFilterState}
                    setCategoriesFilterState={setCategoriesFilterState}
                />

                <CartHome
                    cartShow={cartShow}
                />
            </section>
        </Layout>
    )
}