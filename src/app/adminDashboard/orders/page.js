'use client'
// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";
import { useRouter } from "next/navigation";

export default function Home() {


  const navigate = useRouter();


   return (
     <main className="w-full  bg-[#F4EFF4] h-full">
       <div className="w-full p-6 flex gap-4">
         <div className="flex flex-col bg-white gap-4 rounded-xl items-center w-[50%] p-4">
           <p className="text-justify">
             Have a view of the{" "}
             <span className="font-bold">complete order history</span> of all
             your registered website customers in one place.
           </p>
           <button 
           onClick={()=>navigate.push('/adminDashboard/orders/orderCategories/confirmedOrders')}
           className="bg-[#6750A4] justify-center rounded-2xl py-3 px-6 w-full flex text-white items-center gap-4">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="19"
               height="18"
               viewBox="0 0 19 18"
               fill="none"
             >
               <path
                 d="M9.5 1.5C5.36 1.5 2 4.86 2 9C2 13.14 5.36 16.5 9.5 16.5C13.64 16.5 17 13.14 17 9C17 4.86 13.64 1.5 9.5 1.5ZM12.5225 9.3975L10.2725 11.6475C10.16 11.76 10.0175 11.8125 9.875 11.8125C9.7325 11.8125 9.59 11.76 9.4775 11.6475C9.26 11.43 9.26 11.07 9.4775 10.8525L10.7675 9.5625H6.875C6.5675 9.5625 6.3125 9.3075 6.3125 9C6.3125 8.6925 6.5675 8.4375 6.875 8.4375H10.7675L9.4775 7.1475C9.26 6.93 9.26 6.57 9.4775 6.3525C9.695 6.135 10.055 6.135 10.2725 6.3525L12.5225 8.6025C12.74 8.82 12.74 9.18 12.5225 9.3975Z"
                 fill="white"
               />
             </svg>
             View Orders
           </button>
         </div>
         <div className="flex flex-col bg-white rounded-xl w-[50%] p-4 justify-between">
           <p className="left-0">Want to Create a new order?</p>
           <button 
           onClick={navigate.push('/adminDashboard/orders/createOrder')}
           className="bg-[#6750A4] rounded-2xl py-3 px-6 w-full flex text-white items-center justify-center gap-4">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="19"
               height="18"
               viewBox="0 0 19 18"
               fill="none"
             >
               <path
                 d="M9.5 1.5C5.36 1.5 2 4.86 2 9C2 13.14 5.36 16.5 9.5 16.5C13.64 16.5 17 13.14 17 9C17 4.86 13.64 1.5 9.5 1.5ZM12.5225 9.3975L10.2725 11.6475C10.16 11.76 10.0175 11.8125 9.875 11.8125C9.7325 11.8125 9.59 11.76 9.4775 11.6475C9.26 11.43 9.26 11.07 9.4775 10.8525L10.7675 9.5625H6.875C6.5675 9.5625 6.3125 9.3075 6.3125 9C6.3125 8.6925 6.5675 8.4375 6.875 8.4375H10.7675L9.4775 7.1475C9.26 6.93 9.26 6.57 9.4775 6.3525C9.695 6.135 10.055 6.135 10.2725 6.3525L12.5225 8.6025C12.74 8.82 12.74 9.18 12.5225 9.3975Z"
                 fill="white"
               />
             </svg>
             Create new order
           </button>
         </div>
       </div>
     </main>
   );
 }
 