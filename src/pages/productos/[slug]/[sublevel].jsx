export async function getServerSideProps(context){
    const {params} = context;
    console.log(params);
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