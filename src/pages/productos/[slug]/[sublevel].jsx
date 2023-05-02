export async function getServerSideProps(context){
    const {params} = context;
    const {sublevel} = params;
    return{
        props:{
            sublevel,
        }
    }
}


export default function subLevel(){
    return(
        <div>holala</div>
    )
}