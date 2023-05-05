import getCategories from "../../../utils/categories.json"
import ProductsLayout from "../layout";
import ProductsIndex from "@/components/ProductsIndex";

export async function getServerSideProps(context){
    const {params} = context;
    console.log(params);
    const {sublevel, slug} = params;
    return{
        props:{
            sublevel,
            slug,
        }
    }
}


export default function subLevel({sublevel, slug}){
    return(
        <ProductsLayout>
            <ProductsIndex 
                sublevel={sublevel}
                slug={slug}
            />
        </ProductsLayout>
    )
}