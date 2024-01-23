// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";

export default function Home() {
   return (
     <main className="w-full  bg-[#F4EFF4] h-full">
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
       <div className="w-full p-6 flex gap-4">
         <div className="flex flex-col bg-white gap-4 rounded-xl items-center w-[50%] p-4">
           <p className="text-justify">
             Have a view of the{" "}
             <span className="font-bold">complete order history</span> of all
             your registered website customers in one place.
           </p>
           <button className="bg-[#6750A4] justify-center rounded-2xl py-3 px-6 w-full flex text-white items-center gap-4">
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
           <button className="bg-[#6750A4] rounded-2xl py-3 px-6 w-full flex text-white items-center justify-center gap-4">
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
       </div>
     </main>
   );
 }
 