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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.1404 21.6188C17.2604 21.8788 16.2204 21.9988 15.0004 21.9988H9.00035C7.78035 21.9988 6.74035 21.8788 5.86035 21.6188C6.08035 19.0188 8.75035 16.9688 12.0004 16.9688C15.2504 16.9688 17.9204 19.0188 18.1404 21.6188Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Customer</p>
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
                d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10.25H16"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 13.75H14"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Orders</p>
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
                d="M20.4198 12.3697C21.2898 12.7197 21.8297 13.7497 21.6297 14.6597L21.2197 16.5197C20.5097 19.7197 17.9997 21.9997 14.3797 21.9997H9.61974C5.99974 21.9997 3.48974 19.7197 2.77974 16.5197L2.36974 14.6597C2.16974 13.7497 2.70973 12.7197 3.57973 12.3697L4.99974 11.7997L10.5098 9.58969C11.4698 9.20969 12.5297 9.20969 13.4897 9.58969L18.9997 11.7997L20.4198 12.3697Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22V10"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Shipments</p>
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
                d="M13.0598 10.9414C15.3098 13.1914 15.3098 16.8314 13.0598 19.0714C10.8098 21.3114 7.16985 21.3214 4.92985 19.0714C2.68985 16.8214 2.67985 13.1814 4.92985 10.9414"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.59 13.4089C8.24996 11.0689 8.24996 7.26891 10.59 4.91891C12.93 2.56891 16.73 2.57891 19.08 4.91891C21.43 7.25891 21.42 11.0589 19.08 13.4089"
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
                d="M13 11.1484H7"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 11.1498V6.52985C2 4.48985 3.65 2.83984 5.69 2.83984H11.31C13.35 2.83984 15 4.10984 15 6.14984"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.48 12.1984C16.98 12.6784 16.74 13.4184 16.94 14.1784C17.19 15.1084 18.11 15.6984 19.07 15.6984H20V17.1484C20 19.3584 18.21 21.1484 16 21.1484H6C3.79 21.1484 2 19.3584 2 17.1484V10.1484C2 7.93844 3.79 6.14844 6 6.14844H16C18.2 6.14844 20 7.94844 20 10.1484V11.5984H18.92C18.36 11.5984 17.85 11.8184 17.48 12.1984Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0002 12.6216V14.6816C22.0002 15.2416 21.5402 15.7016 20.9702 15.7016H19.0402C17.9602 15.7016 16.9702 14.9116 16.8802 13.8316C16.8202 13.2016 17.0602 12.6116 17.4802 12.2016C17.8502 11.8216 18.3602 11.6016 18.9202 11.6016H20.9702C21.5402 11.6016 22.0002 12.0616 22.0002 12.6216Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Billing</p>
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
                d="M22 4.67165V16.7417C22 17.7017 21.22 18.6016 20.26 18.7216L19.93 18.7617C17.75 19.0517 14.39 20.1616 12.47 21.2216C12.21 21.3716 11.78 21.3716 11.51 21.2216L11.47 21.2017C9.54997 20.1517 6.20003 19.0517 4.03003 18.7617L3.73999 18.7216C2.77999 18.6016 2 17.7017 2 16.7417V4.66164C2 3.47164 2.96997 2.57165 4.15997 2.67165C6.25997 2.84165 9.43997 3.90168 11.22 5.01168L11.47 5.16164C11.76 5.34164 12.24 5.34164 12.53 5.16164L12.7 5.05166C13.33 4.66166 14.13 4.27165 15 3.92165V8.00167L17 6.67165L19 8.00167V2.7817C19.27 2.7317 19.53 2.70166 19.77 2.68166H19.83C21.02 2.58166 22 3.47165 22 4.67165Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.48828V20.4883"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 2.78125V8.00122L17 6.6712L15 8.00122V3.9212C16.31 3.4012 17.77 2.98125 19 2.78125Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Blog</p>
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
                d="M11.4594 13.7294C13.0113 13.7294 14.2694 12.4713 14.2694 10.9194C14.2694 9.36745 13.0113 8.10938 11.4594 8.10938C9.90749 8.10938 8.64941 9.36745 8.64941 10.9194C8.64941 12.4713 9.90749 13.7294 11.4594 13.7294Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6495 20.1988C16.6495 17.8688 14.3295 15.9688 11.4595 15.9688C8.58953 15.9688 6.26953 17.8588 6.26953 20.1988"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 5C23 5.32 22.96 5.62999 22.88 5.92999C22.79 6.32999 22.63 6.72 22.42 7.06C21.94 7.87 21.17 8.49998 20.25 8.78998C19.86 8.92998 19.44 9 19 9C17.97 9 17.04 8.60997 16.34 7.96997C16.04 7.70997 15.78 7.4 15.58 7.06C15.21 6.46 15 5.75 15 5C15 4.56 15.07 4.13999 15.2 3.73999C15.39 3.15999 15.71 2.64002 16.13 2.21002C16.86 1.46002 17.88 1 19 1C20.18 1 21.25 1.51002 21.97 2.33002C22.61 3.04002 23 3.98 23 5Z"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.4898 4.98047H17.5098"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 3.51953V6.50952"
                stroke="#938F99"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Refer A Friend</p>
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
