"use client"
// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";
import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {

  const navigate = useRouter();

   return (
     <div className="w-full flex flex-col">
       <div className="flex items-center justify-between ">
         <div className="flex items-center space-x-[20px]">
           <button className="bg-[#060C2C] flex gap-2 items-center relative text-white font-roboto p-[10px_15px] rounded-[10px]">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
             >
               <path
                 d="M21 2H9C8.45 2 8 2.45 8 3V6C8 6.55 8.45 7 9 7H21C21.55 7 22 6.55 22 6V3C22 2.45 21.55 2 21 2Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M11 17H8C7.45 17 7 17.45 7 18V21C7 21.55 7.45 22 8 22H11C11.55 22 12 21.55 12 21V18C12 17.45 11.55 17 11 17Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M6 9.5H3C2.45 9.5 2 9.95 2 10.5V13.5C2 14.05 2.45 14.5 3 14.5H6C6.55 14.5 7 14.05 7 13.5V10.5C7 9.95 6.55 9.5 6 9.5Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M17 9.64062H10.5C9.95 9.64062 9.5 10.0906 9.5 10.6406V13.3606C9.5 13.9106 9.95 14.3606 10.5 14.3606H17C17.55 14.3606 18 13.9106 18 13.3606V10.6406C18 10.0906 17.55 9.64062 17 9.64062Z"
                 fill="#E6E1E5"
               />
             </svg>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
               className="absolute top-0 right-0"
             >
               <circle
                 cx="8"
                 cy="8"
                 r="7"
                 fill="#B3261E"
                 stroke="white"
                 stroke-width="2"
               />
             </svg>
             Filter View
           </button>
           <div className="border flex gap-2 items-center border-gray-600 rounded-[10px] px-[15px] w-[400px]">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
             >
               <path
                 d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                 fill="#79747E"
               />
               <path
                 d="M21.9999 22.7514C21.8099 22.7514 21.6199 22.6814 21.4699 22.5314L19.4699 20.5314C19.1799 20.2414 19.1799 19.7614 19.4699 19.4714C19.7599 19.1814 20.2399 19.1814 20.5299 19.4714L22.5299 21.4714C22.8199 21.7614 22.8199 22.2414 22.5299 22.5314C22.3799 22.6814 22.1899 22.7514 21.9999 22.7514Z"
                 fill="#79747E"
               />
             </svg>
             <input
               type="text"
               className="h-full w-full py-[11px] outline-none bg-transparent font-roboto"
               placeholder="Search for users with any related keyword"
             />
           </div>
           <button className="bg-[#060C2C] flex gap-2 items-center text-white font-roboto p-[10px_15px] rounded-[10px]">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
             >
               <path
                 d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                 fill="#E6E1E5"
               />
             </svg>
             Bulk Actions
           </button>
         </div>
         <div>
           <button 
           onClick={navigate.push('/adminDashboard/orders/createOrder')}
           className="bg-[#060C2C] text-white flex gap-2 items-center font-roboto p-[10px_15px] rounded-[10px]">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
             >
               <path
                 d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z"
                 fill="#E6E1E5"
               />
               <path
                 d="M7 2H6C3 2 2 3.79 2 6V7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7ZM11.75 10.75H9.75V12.75C9.75 13.16 9.41 13.5 9 13.5C8.59 13.5 8.25 13.16 8.25 12.75V10.75H6.25C5.84 10.75 5.5 10.41 5.5 10C5.5 9.59 5.84 9.25 6.25 9.25H8.25V7.25C8.25 6.84 8.59 6.5 9 6.5C9.41 6.5 9.75 6.84 9.75 7.25V9.25H11.75C12.16 9.25 12.5 9.59 12.5 10C12.5 10.41 12.16 10.75 11.75 10.75Z"
                 fill="#E6E1E5"
               />
             </svg>
             Create new Order
           </button>
         </div>
       </div>
       <div className=" h-[500px] mt-[30px] relative rounded-[10px] max-w-[1200px] overflow-x-auto w-full scrollbar">
      <table className="w-full bg-white text-sm text-left rtl:text-right  rounded-[10px]">
        <thead className="font-roboto  text-[14px] ">
          <tr className="">
            <th className="px-6 py-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-[18px] w-[18px]"
              />
            </th>
            <th scope="col" className="min-w-[90px]  py-3">
              Order ID
            </th>
            <th scope="col" className="min-w-[100px]  py-3">
              Type
            </th>
            {/* <th scope="col" className="min-w-[110px] py-3">
              Shipment ID
            </th> */}
            <th scope="col" className="min-w-[110px]  py-3">
              Customer
            </th>
            <th scope="col" className="min-w-[130px]   py-3">
              Shipment Location
            </th>
            
            <th scope="col" className="min-w-[110px] py-3">
              Payment Status
            </th>
            <th scope="col" className="min-w-[150px] py-3">
              Staff In Charge
            </th>
            
            <th scope="col" className="min-w-[60px] py-3">
              Total
            </th>
            <th scope="col" className="min-w-[60px] py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-50 border-b gap-x-[20px] font-roboto">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap"
            >
              <input
                type="checkbox"
                name=""
                id=""
                className="h-[18px] w-[18px]"
              />
            </th>
            <td className="min-w-[90px] py-4">
              <div>
                <p className="text-[16px] font-[500]">OD78667</p>
                <p className="">{"SH08756"}</p>
              </div>
            </td>
            <td className="min-w-[100px] py-4 font-[500] text-[14px]">
              Shipment
            </td>
           
            <td className="min-w-[110px] text-[16px] font-[500] py-4">
              <div className="flex items-center space-x-[2px]">
                <p>loll</p>
                <p className="text-[#21005D] font-[500] text-[14px]">
                  Rexo Offorex
                </p>
              </div>
            </td>
            <td className="min-w-[130px] text-[14px] font-[500] py-4">
              NG-LOS-A 3
            </td>
            
            <td className="min-w-[110px] text-[14px] font-[500] py-4">
              c
            </td>
            <td className="min-w-[150px] text-[14px] font-[500] py-4">
              Micheal Sam obalodu
            </td>
           
            <td className="min-w-[110px] text-[14px] font-[500] py-4 ">
              $107.76
            </td>
            <td className="min-w-[110px] text-[14px] font-[500] py-4 ">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center ">
                    <BsThreeDots className="text-[25px]" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#FFFBFE] border-none shadow-lg  ">
                    <div className="">
                      <Menu.Item>
                        <Link href='/adminDashboard/orders/orderCategories/draftRequests/orderDetails'
                          className={`hover:bg-[#6750A4] hover:text-white group flex w-full items-center rounded-t-md  px-2 py-[10px] text-sm`}
                        >
                          View Order Details
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          href='/adminDashboard/orders/orderCategories/draftRequests/paymentStatus'
                          className={` hover:bg-[#6750A4] hover:text-white group flex w-full items-center  px-2 py-[10px] text-sm`}
                        >
                          Check Payment Status
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`hover:bg-[#6750A4] hover:text-white group flex w-full items-center rounded-b-md  px-2 py-[10px] text-sm`}
                        >
                          Cancel Order
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     </div>
   );
 }
 