// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";

export default function Home() {
   return (
     <main className="w-full  bg-[#F4EFF4] h-full flex flex-col">
       <div className="flex flex-col justify-between gap-4 w-full p-4 pt-8 bg-white drop-shadow-md rounded-b-lg">
         <div className="flex justify-between w-full">
           <div className="flex flex-col gap-2">
             <h3 className="font-medium">Orders</h3>
             <div className="flex gap-4 items-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="19"
                 height="20"
                 viewBox="0 0 19 20"
                 fill="none"
               >
                 <path
                   d="M7.14148 2.74887L2.8744 6.07387C2.1619 6.62804 1.58398 7.80762 1.58398 8.7022V14.5685C1.58398 16.4051 3.08023 17.9093 4.9169 17.9093H14.0844C15.9211 17.9093 17.4173 16.4051 17.4173 14.5764V8.81303C17.4173 7.85512 16.7761 6.62804 15.9923 6.08179L11.0998 2.65387C9.99148 1.87804 8.21023 1.91762 7.14148 2.74887Z"
                   stroke="#625B71"
                   stroke-width="1.1875"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
                 <path
                   d="M9.5 14.7422V12.3672"
                   stroke="#625B71"
                   stroke-width="1.1875"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
               </svg>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="10"
                 height="10"
                 viewBox="0 0 10 10"
                 fill="none"
               >
                 <path
                   d="M3.98711 7.84245C3.90794 7.84245 3.82878 7.81328 3.76628 7.75078L1.23711 5.22161C1.11628 5.10078 1.11628 4.90078 1.23711 4.77995L3.76628 2.25078C3.88711 2.12995 4.08711 2.12995 4.20794 2.25078C4.32878 2.37161 4.32878 2.57161 4.20794 2.69245L1.89961 5.00078L4.20794 7.30911C4.32878 7.42995 4.32878 7.62995 4.20794 7.75078C4.14961 7.81328 4.06628 7.84245 3.98711 7.84245Z"
                   fill="#292D32"
                 />
                 <path
                   d="M8.5418 5.3125H1.5293C1.35846 5.3125 1.2168 5.17083 1.2168 5C1.2168 4.82917 1.35846 4.6875 1.5293 4.6875H8.5418C8.71263 4.6875 8.8543 4.82917 8.8543 5C8.8543 5.17083 8.71263 5.3125 8.5418 5.3125Z"
                   fill="#292D32"
                 />
               </svg>
               <p>orders</p>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="10"
                 height="10"
                 viewBox="0 0 10 10"
                 fill="none"
               >
                 <path
                   d="M3.98711 7.84245C3.90794 7.84245 3.82878 7.81328 3.76628 7.75078L1.23711 5.22161C1.11628 5.10078 1.11628 4.90078 1.23711 4.77995L3.76628 2.25078C3.88711 2.12995 4.08711 2.12995 4.20794 2.25078C4.32878 2.37161 4.32878 2.57161 4.20794 2.69245L1.89961 5.00078L4.20794 7.30911C4.32878 7.42995 4.32878 7.62995 4.20794 7.75078C4.14961 7.81328 4.06628 7.84245 3.98711 7.84245Z"
                   fill="#292D32"
                 />
                 <path
                   d="M8.5418 5.3125H1.5293C1.35846 5.3125 1.2168 5.17083 1.2168 5C1.2168 4.82917 1.35846 4.6875 1.5293 4.6875H8.5418C8.71263 4.6875 8.8543 4.82917 8.8543 5C8.8543 5.17083 8.71263 5.3125 8.5418 5.3125Z"
                   fill="#292D32"
                 />
               </svg>
               <p>confirmed orders</p>
             </div>
           </div>
           <div className="flex gap-1">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
             >
               <path
                 d="M12 6.44V9.77"
                 stroke="#79747E"
                 stroke-width="1.5"
                 stroke-miterlimit="10"
                 stroke-linecap="round"
               />
               <path
                 d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                 stroke="#79747E"
                 stroke-width="1.5"
                 stroke-miterlimit="10"
                 stroke-linecap="round"
               />
               <path
                 d="M15.3299 18.82C15.3299 20.65 13.8299 22.15 11.9999 22.15C11.0899 22.15 10.2499 21.77 9.64992 21.17C9.04992 20.57 8.66992 19.73 8.66992 18.82"
                 stroke="#79747E"
                 stroke-width="1.5"
                 stroke-miterlimit="10"
               />
             </svg>
             <div className="flex">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
               >
                 <path
                   d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                   stroke="#79747E"
                   stroke-width="1.5"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
                 <path
                   d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                   stroke="#79747E"
                   stroke-width="1.5"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
               </svg>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
               >
                 <path
                   d="M17.92 8.17999H11.69H6.07999C5.11999 8.17999 4.63999 9.33999 5.31999 10.02L10.5 15.2C11.33 16.03 12.68 16.03 13.51 15.2L15.48 13.23L18.69 10.02C19.36 9.33999 18.88 8.17999 17.92 8.17999Z"
                   fill="#79747E"
                 />
               </svg>
             </div>
           </div>
         </div>
         <div className="p-4 flex gap-6 border border-t-1 border-b-0 border-x-0">
           <p className="text-[#6750A4] font-medium">Confirmed Orders</p>
           <p className=" font-medium">Order Requests</p>
           <p className=" font-medium">Draft Orders</p>
         </div>
       </div>
       <div className="w-full p-6 flex justify-center items-center grow">
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
       </div>
     </main>
   );
 }
 