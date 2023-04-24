// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

// export default function CategorySubLevel({categoryId, categoryName, categorySlug,subCategoriesState , setSubCategoriesState, categorySubLevels}){
//     console.log(categorySlug);
    
//     return(
//         <div className={categorySubLevels && subCategoriesState === categoryId ? "fixed top-0 right-0 translate-x-[0px] z-[2000] w-full h-full bg-white transition-all" : "fixed top-0 right-0 translate-x-[500px]  z-[10] w-full h-full bg-white transition-all"}>
//             <div className="w-full h-auto flex justify-between items-center py-4 px-2 bg-green-600">
//                 <FontAwesomeIcon onClick={() => setSubCategoriesState(state => !state)} className="text-white w-[24px] h-[24px] flex justify-center items-center mr-4" icon={faArrowLeft}></FontAwesomeIcon>
//                 <h3 className="text-white text-xl font-semibold tracking-wide">{categoryName}</h3>
//             </div>

//             <ul className="w-full h-auto p-2 mt-4">
//                 {categorySubLevels == null ?
//                 <></>

//                 :
//                 <>
//                 {categorySubLevels.map((category) => (
//                     <li className="w-full h-[50px] mb-4 flex flex-row justify-between items-center" key={category.id}>
//                         <Link href={`/productos/${categorySlug}/${category.slug}`} className="text-green-500 w-auto text-lg font-medium">{category.name}</Link>
//                     </li>
//                 ))}
//                 </>

//                 }
//                 </ul>
//         </div>
//     )
// }