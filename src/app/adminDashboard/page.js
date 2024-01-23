// import Image from "next/image";
// import tabImage from "../images/Rectangle 12.png";

export default function Home() {
  return (
    <main className="w-full  bg-[#F4EFF4]">
      <div className="flex justify-between w-full p-4 pt-8 bg-white drop-shadow-md rounded-b-lg">
        <h3 className="font-medium">Home</h3>
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
      <div className="w-full p-6">
        <div className="w-fit flex flex-col gap-4">
          <div className="w-fit flex gap-4">
            <div className="w-fit flex flex-col gap-4">
              <div className="w-[360px] bg-white rounded-lg flex flex-col gap-2 p-4 py-8 border border-[#CAC4D0]">
                <p className="font-medium text-sm">Total Order</p>
                <div className="flex w-full">
                  <div className="gap-2 text-sm p-1 w-full flex flex-col">
                    <div className="flex items-center w-full relative">
                      <p className="border border-fadedBrd  rounded-lg text-[#B3261E] py-[2px] px-2">
                        540
                      </p>
                      <p className="text-[#79747E] ml-3  w-fit">Shop for me</p>
                      <div className="flex p-2 rounded-full bg-[#FFFBFE] items-center h-full my-auto absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center w-full relative">
                      <p className="border border-[#4A4458] rounded-lg text-[#4A4458] py-[2px] px-2">
                        540
                      </p>
                      <p className="text-[#79747E] ml-3">Export</p>
                      <div className="flex p-2 rounded-full bg-[#FFFBFE] items-center h-full my-auto absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center w-full relative">
                      <p className="border border-[#DF5000] rounded-lg text-[#DF5000] py-[2px] px-2">
                        540
                      </p>
                      <p className="text-[#79747E] ml-3">Import</p>
                      <div className="flex p-2 rounded-full bg-[#FFFBFE] items-center h-full my-auto absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center w-full relative">
                      <p className="border border-[#6750A4] rounded-lg text-[#6750A4] py-[2px] px-2">
                        540
                      </p>
                      <p className="text-[#79747E] ml-3">Auto Import</p>
                      <div className="flex p-2 rounded-full bg-[#FFFBFE] items-center h-full my-auto absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/6 flex text-sm flex-col justify-center bg-tOrderBg bg-cover bg-center ml-6 border px-3 py-6 rounded-lg text-center">
                    <h3 className="text-[#B3261E] font-medium">1200</h3>
                    <p>Total orders</p>
                  </div>
                </div>
              </div>

              <div className="w-[360px] bg-white rounded-lg flex flex-col gap-1 p-3 border border-[#CAC4D0]">
                <div className="w-full flex justify-between py-2">
                  <h3 className="font-medium text-2xl leading-tight">
                    Pending Transaction
                  </h3>
                  <div className="flex gap-3 items-center w-1/2 border bg-pendingBg bg-cover bg-center rounded-lg py-2 px-3">
                    <p className="font-medium text-2xl text-[#B3261E]">9</p>
                    <h4 className="text-[#625B71] font-medium w-1/2 leading-tight">
                      Pending transaction
                    </h4>
                  </div>
                </div>
                <div className="flex w-full text-sm">
                  <div className="gap-1 p-1 w-full flex flex-col">
                    <div className="flex items-center w-full">
                      <p className="text-[#79747E]  w-full border border-[B3261E] rounded-xl px-3 py-2">
                        IN6123578 <span className="mx-2"> | </span> Shop for me
                      </p>
                      <div className="flex rounded-full bg-[#FFFBFE] p-2 items-center my-auto ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center w-full">
                      <p className="text-[#79747E]  w-full border border-[B3261E] rounded-xl px-3 py-2">
                        IN6123578 <span className="mx-2"> | </span> Clearing &
                        port handling
                      </p>
                      <div className="flex rounded-full bg-[#FFFBFE] p-2 items-center my-auto ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center w-full">
                      <p className="text-[#79747E]  w-full border border-[B3261E] rounded-xl px-3 py-2">
                        IN6123578 <span className="mx-2"> | </span> Shipping
                      </p>
                      <div className="flex rounded-full bg-[#FFFBFE] p-2 items-center my-auto ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.625 9H15.2475"
                            stroke="#938F99"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center pl-4">
                  <p className="text-[#6750A4] font-medium text-sm">View all</p>
                  <div className="flex rounded-full bg-[#FFFBFE] p-2 items-center my-auto ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M10.8225 4.4475L15.375 9L10.8225 13.5525"
                        stroke="#6750A4"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.625 9H15.2475"
                        stroke="#6750A4"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[330px] bg-white rounded-lg p-4 border border-[#CAC4D0] text-sm">
              <h3 className="font-bold mt-4 mb-3">
                My RAC Logistics Warehouse locations
              </h3>
              <p className="mb-3 text-[#79747E]">
                Our warehouses are in{" "}
                <span className="text-[#6750A4]">
                  Nigeria, the U.S., the U.K., China, and Dubai.
                </span>{" "}
                Use our addresses for international online store purchases or
                sending items to Nigeria for export. We promptly assist with
                imports/exports upon arrival. Contact us for shipping to/from
                other countries aside the ones mentioned above. Choose your
                preferred country below for warehouse locations.
              </p>
              <select
                className="mb-2block w-full rounded-md border-[#C0C3D0] mb-4 p-4 h-14 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold sm:text-sm sm:leading-6 bg-input-bg"
                value=""
              >
                <option value="option1">Option 1</option>

                <option value="option2">Option 2</option>

                <option value="option3">Option 3</option>
              </select>
              <hr className="mb-4 border border-dashed" />
              <div className="mb-4 flex flex-col gap-1">
                <p className="text-[#49454F]">Mr Rex Offor /RAC</p>
                <p className="text-[#49454F]">+234 8080006321</p>
                <p className="text-[#49454F]">rexoffor@gmail.com</p>
                <p className="text-[#49454F]">
                  2e festac junction beside soprite, ikeja, Lagos State,
                  Nigeria, 095444
                </p>
              </div>
              <button className="bg-[#6750A4] w-full justify-center flex gap-2 rounded-3xl text-white font-medium py-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M12.8333 9.675V12.825C12.8333 15.45 11.7833 16.5 9.15825 16.5H6.00825C3.38325 16.5 2.33325 15.45 2.33325 12.825V9.675C2.33325 7.05 3.38325 6 6.00825 6H9.15825C11.7833 6 12.8333 7.05 12.8333 9.675Z"
                    fill="white"
                  />
                  <path
                    d="M13.6583 1.5H10.5083C8.29589 1.5 7.20753 2.25121 6.91974 4.05369C6.83193 4.60363 7.29581 5.0625 7.85272 5.0625H9.15832C12.3083 5.0625 13.7708 6.525 13.7708 9.675V10.9806C13.7708 11.5375 14.2297 12.0014 14.7796 11.9136C16.5821 11.6258 17.3333 10.5374 17.3333 8.325V5.175C17.3333 2.55 16.2833 1.5 13.6583 1.5Z"
                    fill="white"
                  />
                </svg>
                Copy address
              </button>
            </div>
          </div>
          <div>
            <div className="w-[706px] bg-white border rounded-xl p-6">
              <div className="flex justify-between">
                <p className="font-bold text-sm">My Recent Order Requests</p>
                <div className="flex items-center pl-4">
                  <p className="text-[#6750A4] font-medium text-sm">View all</p>
                  <div className="flex rounded-full bg-[#FFFBFE] p-2 items-center my-auto ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M10.8225 4.4475L15.375 9L10.8225 13.5525"
                        stroke="#6750A4"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.625 9H15.2475"
                        stroke="#6750A4"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <label className="w-[142.2px] flex gap-2 border rounded-2xl p-3 px-4">
                  <input type="radio" id="shop" value="Shop for me" />
                  Shop for me
                </label>
                <label className="w-[142.2px] flex gap-2 border rounded-2xl p-3 px-4">
                  <input type="radio" id="export" value="Export" />
                  Export
                </label>
                <label className="w-[142.2px] flex gap-2 border rounded-2xl p-3 px-4">
                  <input type="radio" id="import" value="Import" />
                  Import
                </label>
                <label className="w-[142.2px] flex gap-2 border rounded-2xl p-3 px-4">
                  <input type="radio" id="Autoimport" value="Auto Import" />
                  Auto Import
                </label>
              </div>
            </div>
            <div className="w-[706px] h-[303px] flex justify-center items-center bg-white border rounded-xl p-6">
              <div className="w-3/4 p-4 flex flex-col justify-center items-center gap-2">
                <p className="text-center">
                  You have no recent requests that need attention, would you
                  like to make a new shop for me request?
                </p>
                <button className="bg-[#6750A4] flex justify-center gap-2 rounded-3xl text-white font-medium py-2 px-12 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.77 6.2025L16.5525 4.125C16.2375 1.86 15.21 0.9375 13.0125 0.9375H11.2425H10.1325H7.85248H6.74248H4.94248C2.73748 0.9375 1.71748 1.86 1.39498 4.1475L1.19248 6.21C1.11748 7.0125 1.33498 7.7925 1.80748 8.4C2.37748 9.1425 3.25498 9.5625 4.22998 9.5625C5.17498 9.5625 6.08248 9.09 6.65248 8.3325C7.16248 9.09 8.03248 9.5625 8.99998 9.5625C9.96748 9.5625 10.815 9.1125 11.3325 8.3625C11.91 9.105 12.8025 9.5625 13.7325 9.5625C14.73 9.5625 15.63 9.12 16.1925 8.34C16.6425 7.74 16.845 6.9825 16.77 6.2025Z"
                      fill="white"
                    />
                    <path
                      d="M8.51247 12.4952C7.55997 12.5927 6.83997 13.4027 6.83997 14.3627V16.4177C6.83997 16.6202 7.00497 16.7852 7.20747 16.7852H10.785C10.9875 16.7852 11.1525 16.6202 11.1525 16.4177V14.6252C11.16 13.0577 10.2375 12.3152 8.51247 12.4952Z"
                      fill="white"
                    />
                    <path
                      d="M16.0275 10.8005V13.0355C16.0275 15.1055 14.3475 16.7855 12.2775 16.7855C12.075 16.7855 11.91 16.6205 11.91 16.418V14.6255C11.91 13.6655 11.6175 12.9155 11.0475 12.4055C10.545 11.948 9.86253 11.723 9.01504 11.723C8.82754 11.723 8.64003 11.7305 8.43753 11.753C7.10253 11.888 6.09003 13.013 6.09003 14.363V16.418C6.09003 16.6205 5.92503 16.7855 5.72253 16.7855C3.65253 16.7855 1.97253 15.1055 1.97253 13.0355V10.8155C1.97253 10.2905 2.49003 9.93805 2.97753 10.1105C3.18003 10.178 3.38253 10.2305 3.59253 10.2605C3.68253 10.2755 3.78003 10.2905 3.87003 10.2905C3.99003 10.3055 4.11003 10.313 4.23003 10.313C5.10003 10.313 5.95503 9.99055 6.63003 9.43555C7.27503 9.99055 8.11503 10.313 9.00003 10.313C9.89253 10.313 10.7175 10.0055 11.3625 9.45055C12.0375 9.99805 12.8775 10.313 13.7325 10.313C13.8675 10.313 14.0025 10.3055 14.13 10.2905C14.22 10.283 14.3025 10.2755 14.385 10.2605C14.6175 10.2305 14.8275 10.163 15.0375 10.0955C15.525 9.93055 16.0275 10.2905 16.0275 10.8005Z"
                      fill="white"
                    />
                  </svg>
                  Request new order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
