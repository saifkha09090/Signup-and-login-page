import Link from "next/link";
import { useRef } from "react";

export default function Login({ onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginFormHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    onFormSubmit(email, password);
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center p-10 bg-[#f0f2f5]">
        <div className="bg-[#fff] px-4 py-6 w-[450px] rounded-[0.5rem] shadow-md shadow-[#0000001a]">
          <h1 className="text-[#007bff] text-center font-serif mb-6 font-bold text-4xl">
            Login
          </h1>
          <form onSubmit={loginFormHandler} action="">
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Email</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Password</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="password"
                name="password"
                ref={passwordRef}
                placeholder="Enter your password"
              />
            </div>
            <div className="text-center">
              <p className="mb-4 font-normal text-base">
                Don't have an account? <Link className=" font-semibold text-[#007bff] " href="/auth/signup"> Signup</Link>
              </p>
              <button  className="bg-[#007bff] font-serif font-medium w-2/4 text-[#fff] border-none rounded py-2 px-4 cursor-pointer" type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
