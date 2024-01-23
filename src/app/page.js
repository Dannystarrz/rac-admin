'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "../assets/svg/rac-logo.svg";
import TextInput from "../components/Forms/Inputs/TextInput";
import PasswordInput from "../components/Forms/Inputs/PasswordInput";
import toast from "react-hot-toast";
import Image from "next/image";

function LoginForm() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async () => {
    // if (!email.trim() || !password.trim()) {
    //   alert("Please fill all the fields");
    // } else {
    //   try {
    //     const data = {
    //       email,
    //       password,
    //     };
    //     const res = await loginAdmin(data).unwrap();
    //     console.log(res)
    //     dispatch(setUser(res));
    //     navigate.push("/admin");
    //   } catch (error) {
    //     toast.error(error.data.message)
    //     console.log(error);
    //   }
    // }
    navigate.push('/adminDashboard');
  };

  return (
    <div className="bg-primary flex-col font-roboto flex h-screen w-screen justify-center items-center">
      <div className="text-white">
        <Image src={logo} alt="" className="h-[30px] lg:h-fit" />
      </div>
      <div className="bg-white mt-[20px] lg:mt-[50px] w-full lg:w-[40%] p-[50px_20px] rounded-[20px] flex flex-col items-center justify-center">
        <p className="text-[22px]">LOGIN</p>
        <div className="w-full mt-[20px] lg:mt-[50px] flex flex-col items-center justify-center">
          <div className="w-full lg:w-[70%] flex flex-col items-center">
            <TextInput
              type="email"
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <div className="w-full lg:w-[70%] flex flex-col items-center mt-[30px] relative">

            <PasswordInput
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
            
            />
           
          
          </div>
          <div className="mt-[50px]">
            <button
              // disabled={isLoading && true}
              onClick={handleSubmit}
              className="bg-[#6750A4] disabled:bg-gray-400 text-white font-roboto p-[8px_25px] rounded-full"
            >
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
