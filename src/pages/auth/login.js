import Login from "@/components/auth/Login"
import { getSession, signIn } from "next-auth/react"

export default function () {

    const onLogin = async (email, password) => {
        const data = await signIn(`credentials`,{redirect:{destination: "/", parmanent: false,}, email, password})
        console.log(data);
    }
    return(
        <>
         <Login onFormSubmit={onLogin} />
        </>
    )
}

export async function getServerSideProps({req}) {
    const session = await getSession({req});
    if(session){
        return {
            redirect: {
            destination: "/",
            permanent: false,
        }
    } 
    }
    return{
    props:{}
    }
}



// export async function getServerSideProps({req}) {
//     const session = await getSession({req});
//     if(session){
//         return{
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             }
//         }
//     }
//     return{
//         props: {}
//     }
// }