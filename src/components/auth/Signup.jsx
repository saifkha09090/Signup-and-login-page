import Link from "next/link";
import { useRef, useState } from "react";

export default function Signup({ onFormSubmit }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const fNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const maleRef = useRef(null);
  const femaleRef = useRef(null);

  const genderHandler = () => {
    if (maleRef.current.checked) {
      setSelectedGender("Male");
    } else if (femaleRef.current.checked) {
      setSelectedGender("Female");
    }
  };

  const signupFormHandler = (e) => {
    e.preventDefault();

    const fName = fNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;
    const gender = selectedGender;

    if (password === rePassword) {
      onFormSubmit(fName, email, password, rePassword, gender);
    } else {
      alert("password not match");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center p-10 bg-[#f0f2f5]">
        <div className="bg-[#fff] px-4 py-6 w-[450px] rounded-[0.5rem] shadow-md shadow-[#0000001a]">
          <h1 className="text-[#007bff] text-center font-serif mb-6 font-bold text-4xl">Sign up</h1>
          <form onSubmit={signupFormHandler} action="">
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Full Name</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="text"
                ref={fNameRef}
                name="fullname"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Email</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="text"
                ref={emailRef}
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Password</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Re-enter Password</p>
              <input
                className=" w-[100%] p-2 border-solid border border-[#ccc] rounded"
                type="password"
                ref={rePasswordRef}
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <p className=" mb-2 font-normal text-base">Gender</p>
              <div>
                <input
                  className=""
                  type="radio"
                  ref={maleRef}
                  name="gender"
                  value="Male"
                  onChange={genderHandler}
                />
                <label className=" px-3">MALE</label>

                <input
                  type="radio"
                  ref={femaleRef}
                  name="gender"
                  value="Female"
                  onChange={genderHandler}
                />
                <label className=" px-3">FEMALE</label>
              </div>
            </div>
            <div className="text-center">
            <p className="mb-4 font-normal text-base">
            Already have an account? <Link
                className=" font-semibold text-[#007bff] "
                href="/auth/login"
              > Login
              </Link>
            </p>
            
            <button className="bg-[#007bff] font-serif font-medium w-2/4 text-[#fff] border-none rounded py-2 px-4 cursor-pointer" type="submit">Sign up</button></div>
          </form>
        </div>
      </div>
    </>
  );
}
