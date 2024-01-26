import { useState } from "react";
import { useLoginAdminMutation } from "../../../services/routes/auth";
import logo from "../../../assets/svg/rac-logo.svg";
import { setUser } from "../../../services/features/authSlice/authSlice";
import TextInput from "../Inputs/TextInput";
import PasswordInput from "../Inputs/PasswordInput";
import toast from "react-hot-toast";
import Image from "next/image";

function LoginForm() {
  const dispatch = useDispatch();
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill all the fields");
    } else {
      try {
        const data = {
          email,
          password,
        };
        const res = await loginAdmin(data).unwrap();
        console.log(res)
        dispatch(setUser(res));
        navigate("/admin");
      } catch (error) {
        toast.error(error.data.message)
        console.log(error);
      }
    }
  };

  return (
    <div className="h-screen bg-brand/100 flex flex-col items-center p-[20px] justify-center font-roboto">
      <div className="text-white">
        <Image src={logo} alt="RacLogo" className="h-[30px] lg:h-fit" />
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
              disabled={isLoading && true}
              onClick={handleSubmit}
              className="bg-brand/200 disabled:bg-gray-400 text-white font-roboto p-[8px_25px] rounded-full"
            >
              {isLoading ? "Loading..." : "Login to your account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
