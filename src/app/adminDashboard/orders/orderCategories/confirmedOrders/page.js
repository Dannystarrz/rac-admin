"use client"
// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";

export default function Home() {
   return (
     <>
      <div className="flex justify-center items-center flex-col gap-4 rounded-xl w-[40%] h-fit p-4">
           <p className="text-center font-medium">
             You don’t have any order yet, would you like to create one now?
           </p>
           <button className="bg-[#6750A4] justify-center rounded-3xl w-fit py-3 px-6 flex text-white items-center gap-4">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="19"
               height="18"
               viewBox="0 0 19 18"
               fill="none"
             >
               <path
                 d="M14.0075 1.5V2.625C14.5025 2.625 14.975 2.8275 15.32 3.165C15.68 3.5325 15.875 4.005 15.875 4.5V6.315C15.875 6.87 15.6275 7.125 15.065 7.125H13.625V3.0075C13.625 2.7975 13.7975 2.625 14.0075 2.625V1.5ZM14.0075 1.5C13.175 1.5 12.5 2.175 12.5 3.0075V8.25H15.065C16.25 8.25 17 7.5 17 6.315V4.5C17 3.675 16.6625 2.925 16.1225 2.3775C15.575 1.8375 14.8325 1.5075 14.0075 1.5C14.015 1.5 14.0075 1.5 14.0075 1.5Z"
                 fill="white"
               />
               <path
                 d="M5.75 1.5H5C2.75 1.5 2 2.8425 2 4.5V5.25V15.75C2 16.3725 2.705 16.725 3.2 16.35L4.4825 15.39C4.7825 15.165 5.2025 15.195 5.4725 15.465L6.7175 16.7175C7.01 17.01 7.49 17.01 7.7825 16.7175L9.0425 15.4575C9.305 15.195 9.725 15.165 10.0175 15.39L11.3 16.35C11.795 16.7175 12.5 16.365 12.5 15.75V3C12.5 2.175 13.175 1.5 14 1.5H5.75ZM9.3125 8.0625H7.8125V9.5625C7.8125 9.87 7.5575 10.125 7.25 10.125C6.9425 10.125 6.6875 9.87 6.6875 9.5625V8.0625H5.1875C4.88 8.0625 4.625 7.8075 4.625 7.5C4.625 7.1925 4.88 6.9375 5.1875 6.9375H6.6875V5.4375C6.6875 5.13 6.9425 4.875 7.25 4.875C7.5575 4.875 7.8125 5.13 7.8125 5.4375V6.9375H9.3125C9.62 6.9375 9.875 7.1925 9.875 7.5C9.875 7.8075 9.62 8.0625 9.3125 8.0625Z"
                 fill="white"
               />
             </svg>
             Add new order
           </button>
         </div>
     </>
   );
 }
 