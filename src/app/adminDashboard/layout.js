'use client'

export default function dashBoardLayout({ children }) {
  return (
    <section className="flex w-full overflow-hidden">
      <div className="bg-primary h-auto w-1/4 text-white pt-6">
        <div className="bg-transGrey p-4 w-11/12 rounded-r-lg flex gap-1">
          <div className="w-[50px] h-[50px] rounded-full bg-[#CAC4D0] flex justify-center items-center">
            <p className="text-black font-bold ">R</p>
          </div>
          <div className=" ">
            <p>Welcome back</p>
            <div className="flex gap-2">
              <p>Rex</p>
              <p className="font-bold">ID: RAC45678</p>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-16 flex flex-col py-2">
          <div className="flex w-full bg-activeBg bg-cover bg-center px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 17.9902V14.9902"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Home</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M1.68811 10.22V14.71C1.68811 19.2 3.48811 21 7.97811 21H13.3681C17.8581 21 19.6581 19.2 19.6581 14.71V10.22"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6781 11C12.5081 11 13.8581 9.51 13.6781 7.68L13.0181 1H8.34809L7.67809 7.68C7.49809 9.51 8.8481 11 10.6781 11Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9881 11C19.0081 11 20.4881 9.36 20.2881 7.35L20.0081 4.6C19.6481 2 18.6481 1 16.0281 1H12.9781L13.6781 8.01C13.8481 9.66 15.3381 11 16.9881 11Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.31811 11C5.96811 11 7.4581 9.66 7.6181 8.01L7.83811 5.8L8.31812 1H5.26811C2.64812 1 1.64811 2 1.28811 4.6L1.01811 7.35C0.818105 9.36 2.29811 11 4.31811 11Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6781 16C9.0081 16 8.1781 16.83 8.1781 18.5V21H13.1781V18.5C13.1781 16.83 12.3481 16 10.6781 16Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Shop For Me</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 11L21.2 2.8"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6.8V2H17.2"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Export</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 2L13.8 10.2"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 6.17V11H17.83"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Import</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11H20L18.87 5.59C18.55 4.07 18 2.83 15.51 2.83Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.43998C7.99998 19 7.78998 19.62 7.53998 20.37L7.33998 20.97C7.14998 21.54 6.99998 22 5.91998 22H4.03998C2.83998 22 1.89998 20.99 2.00998 19.82L2.56998 13.73C2.70998 12.23 2.99998 11 5.61998 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 8H3"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 8H20"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 3V5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 5H13.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 15H9"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 15H18"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Auto Import</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.46997 9C7.40297 9 8.96997 7.433 8.96997 5.5C8.96997 3.567 7.40297 2 5.46997 2C3.53697 2 1.96997 3.567 1.96997 5.5C1.96997 7.433 3.53697 9 5.46997 9Z"
                stroke="#938F99"
                stroke-width="1.5"
              />
              <path
                d="M16.97 15H19.97C21.07 15 21.97 15.9 21.97 17V20C21.97 21.1 21.07 22 19.97 22H16.97C15.87 22 14.97 21.1 14.97 20V17C14.97 15.9 15.87 15 16.97 15Z"
                stroke="#938F99"
                stroke-width="1.5"
              />
              <path
                d="M11.9999 5H14.6799C16.5299 5 17.3899 7.29 15.9999 8.51L8.00995 15.5C6.61995 16.71 7.47994 19 9.31994 19H11.9999"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.48622 5.5H5.49777"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.4862 18.5H18.4978"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Tracking</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 11.15H7"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12.62V14.68C22 15.24 21.5399 15.7 20.9699 15.7H19.0399C17.9599 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.0599 12.61 17.4799 12.2C17.8499 11.82 18.36 11.6 18.92 11.6H20.9699C21.5399 11.6 22 12.06 22 12.62Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Payment History</p>
          </div>
        </div>
        <hr class="w-4/5 mx-auto border-t-1" />
        <div className="flex flex-col py-2">
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 7.57999V8.57999C16.5 9.39999 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40999 7.5 8.57999V7.57999C7.5 6.75999 8.17 6.07999 9 6.07999H15C15.83 6.07999 16.5 6.74999 16.5 7.57999Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.13612 14H8.14767"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9952 14H12.0068"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8544 14H15.8659"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.13612 17.5H8.14767"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9952 17.5H12.0068"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8544 17.5H15.8659"
                stroke="#938F99"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Get a Quote</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
            <p>Help</p>
          </div>
          <div className="flex w-full px-6 py-4 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5699 18.5V14.6"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5699 7.45V5.5"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.57 12.65C17.0059 12.65 18.17 11.486 18.17 10.05C18.17 8.61407 17.0059 7.45001 15.57 7.45001C14.134 7.45001 12.97 8.61407 12.97 10.05C12.97 11.486 14.134 12.65 15.57 12.65Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.43005 18.5V16.55"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.43005 9.4V5.5"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.42996 16.55C9.8659 16.55 11.03 15.3859 11.03 13.95C11.03 12.5141 9.8659 11.35 8.42996 11.35C6.99402 11.35 5.82996 12.5141 5.82996 13.95C5.82996 15.3859 6.99402 16.55 8.42996 16.55Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
