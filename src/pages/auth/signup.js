import Signup from "@/components/auth/Signup";
import { getSession } from "next-auth/react";

export default function () {

    const onSignUp = async (fName, email, password, rePassword, gender) => {
        const response = await fetch('/api/auth/signup',{
            method: "POST",
            body: JSON.stringify({fName, email, password, rePassword, gender}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        if(!response.ok){
            console.error(data.message);
        }
        alert("Signup successfully")
    }
    return(
        <>
         <Signup onFormSubmit={onSignUp} />
        </>
    )
}

export async function getServerSideProps({req}) {
    const session = await getSession({req});
    if(session){
        return{
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }
    return{
        props: {}
    }
}