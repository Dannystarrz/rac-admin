// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";

export default function Home() {
   return (
     <div className="min-w-[250px] bg-brand py-[15px] flex flex-col">
       <div className="rounded-r-[10px] bg-[#E6E1E514] w-[90%] p-[10px] flex items-center space-x-[10px]">
         <div
           className="h-[40px] w-[40px] bg-gray-300 flex items-center
         justify-center rounded-full font-roboto text-[20px] font-[500]"
         >
           R
         </div>
         <div className="text-white font-roboto">
           <p className="font-[400] ">Welcome Back</p>
           <p className="text-[14px]">
             {/* {user?.firstName}{" "}
            <span className="font-[500]">ID {user?.racId}</span> */}
             user
           </p>
         </div>
       </div>
       <div className="mt-[20px] grow flex flex-col justify-between">
         <div className="flex flex-col space-y-[10px]">
           {/* {links.slice(0, 7).map(({ to, id, title }) => (
            <CustomLink to={to} key={id}>
              <div className="">i</div>
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))} */}
         </div>
         <div className="flex flex-col space-y-[10px] border-t pt-[10px] border-[#938F99]">
           {/* {links.slice(7, 10).map(({ to, id, title }) => (
            <CustomLink to={to} key={id}>
              <div className="">i</div>
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))} */}
         </div>
       </div>
     </div>
   );
 }
 