import { getAll } from "@/service/users";
import { getSession, signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
    <div className="m-2 flex justify-between">
     <label className="" >dashboard</label><button  className=" bg-[#007bff] font-serif font-medium text-[#fff] border-none rounded py-2 px-4 cursor-pointer" onClick={signOut}>log out</button></div>
    </>
  );
}

export async function getServerSideProps({req}){
  const data = getAll();
  const session = await getSession({req})
  if(!session){
    return{
      redirect: {
      destination: "/auth/login",
      permanent: false
    }
  }
  }
  return{
    props: {
      session,
    }
  }
}