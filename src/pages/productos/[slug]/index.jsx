import Image from "next/image";
import Link from "next/link";
import getProducts from "../../../utils/products.json"
import getCategories from "../../../utils/categories.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter, faArrowDownWideShort, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CartHome from "@/components/CartHome";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import { useCategory } from "@/context/CategoriesContext";
import Filter from "@/components/Filter";
import OrderProducts from "@/components/OrderProducts";

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params;
    return{
        props:{
            slug,
        }
    }
}

export default function Slug({slug}){
    const {cartShow} = useCart();

    const {setFilterProductState, filterProductState} = useCategory();

    const [subLevelsState, setSubLevelsState] = useState(0);
    const [orderFilterState, setOrderFilterState] = useState({
        active: false,
        value: "A - Z"
    });

    
    const categories = getCategories.categories;
    const categorySelected = categories.filter(category => category.slug == slug);
    const [filterSelected, setFilterSelected] = useState([]);

    const products = getProducts.products;
    const productsByCategory = products.filter(product => product.categoryId == categorySelected[0].id);
    const productsCategoryRelated = [];
    const productsFilterByCategory = [];
    const productsSubLevelByCategory = products.filter((product) => {
        product.subCategoriesId.map((subLevel) => {
            if(subLevel == subLevelsState){
                productsFilterByCategory.push(product)
                return product;
            }
        }) 
    });

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

    const handleActiveOrder = () => {
        setOrderFilterState((prev) => {
            if(!prev.active){
                return {active: true, value: prev.value}
            }
            return {active: false, value: prev.value}
        })
    }

    console.log(filterSelected)

    const [categoriesFilterState, setCategoriesFilterState] = useState(false);

    return(
        <Layout>
            <section className="w-full h-auto min-h-screen pt-4 bg-slate-100 px-4">
                <div className="w-full h-auto p-2 mb-4">
                    <div className="w-[full] h-auto flex flex-row justify-center items-center px-2 pb-2 mb-4 border-b border-green-500">
                        <p className="w-[70%] text-center text-base text-green-500">{`Inicio > `} Productos{` > `} <b>{categorySelected[0].name}</b></p>
                    </div>
                    <div className="w-full h-auto p-2">
                        <h2 className="text-center text-3xl font-semibold text-green-500">{categorySelected[0].name}</h2>
                    </div>
                </div>

                <div className="w-full h-auto py-4">
                    <div className="w-full h-auto flex flex-row justify-between p-2 mb-10 relative">
                        {/* <div onClick={() => setOrderFilterState(state => !state)} type="text" className="w-[45%] shadow-default h-auto flex bg-green-500 justify-center items-center p-2 py-3 rounded-lg relative">
                            <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faFilter} />
                            <p className="ml-3 tracking-wide text-white font-medium">ORDENAR</p>
                            <OrderProducts 
                                orderFilterState={orderFilterState}
                            />
                        </div> */}

                        <div className="w-[45%] shadow-default bg-green-500 h-auto flex justify-center items-center p-2 py-3 rounded-lg relative">
                            <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faArrowDownWideShort} />
                            <p onClick={() => setFilterProductState(state => !state)} className="ml-2 tracking-wide text-white font-medium">CATEGORIAS</p>
                            
                        </div>
                    </div>
                    
                </div>

                <section className="w-full h-full">
                    <div className="w-full h-auto flex justify-between items-center mb-10">
                        <div className="w-auto flex flex-row items-center relative">
                            <p className="text-black">Ordenar por:</p>
                            <div
                                className="w-auto flex flex-row items-center">
                                <p onClick={handleActiveOrder} className="ml-2 text-black font-medium">{orderFilterState.value}</p>
                                <FontAwesomeIcon onClick={handleActiveOrder} className="w-[16px] h-[16px] ml-2 text-green-500" icon={faAngleDown} />
                                <OrderProducts 
                                    orderFilterState={orderFilterState}
                                    setOrderFilterState={setOrderFilterState}
                                />
                            </div>
                        </div>
                        <div className="w-auto flex flex-row items-center">
                            <div
                                className="w-auto flex flex-row items-center relative bg-green-500 p-2 rounded-md">
                                <p onClick={() => setFilterProductState(state => !state)} className="ml-2 text-white font-medium">Filtrar</p>
                                <FontAwesomeIcon onClick={() => setFilterProductState(state => !state)} className="w-[16px] h-[16px] ml-2 text-white rotate-[270deg]" icon={faAngleDown} />
                                <Filter 
                                    filterProductState={filterProductState}
                                    categories={categorySelected[0].subLevels}
                                    handleSubLevelSelect={handleSubLevelSelect}
                                    subLevelsState={subLevelsState}
                                    setFilterProductState={setFilterProductState}
                                    setFilterSelected={setFilterSelected}
                                />
                            </div>
                        </div>
                    </div>

                    <article className="w-full h-full">
                        {!filterSelected ? 
                            <></>

                            :

                            <ul>
                                {filterSelected.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        }
                        <ul className="w-full h-full flex justify-evenly flex-wrap py-4">
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
                            {productsFilterByCategory.map((product) => (
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
                    </article>
                </section>

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