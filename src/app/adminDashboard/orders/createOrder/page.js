'use client'
import { useState } from "react";
import NextIcon from "../../../../components/Icons/NextIcon";
import PrevIcon from "../../../../components/Icons/PrevIcon";
import Step1 from "../../../../components/Forms/Order/Step1";
import Step2 from "../../../../components/Forms/Order/Step2";
import Step3 from "../../../../components/Forms/Order/Step3";
import Step4 from "../../../../components/Forms/Order/Step4";
import Step5 from "../../../../components/Forms/Order/Step5";
import { SaveAdd, TickCircle } from "iconsax-react";

function page() {

  const [formState, setFormState] = useState(0);
  // const order = useSelector((state) => state.order);


  const renderButtons = () => {
    return (
      <div className="flex items-center justify-start space-x-[20px] mt-[30px]">
        {formState > 0 && (
          <button
            className="border border-[#6750A4] text-[#6750A4] p-[8px_20px] rounded-[20px] font-roboto font-[500] text-[14px]  flex items-center space-x-[10px]"
            onClick={() => setFormState(formState - 1)}
          >
            <PrevIcon />
            <span> Back</span>
          </button>
        )}
        {formState < 4 && (
          <button
            className="bg-[#6750A4] text-white flex items-center space-x-[10px] p-[10px_50px] rounded-[20px]  font-roboto text-[16px]"
            onClick={() => setFormState(formState + 1)}
          >
            <NextIcon />
            <span> Next</span>
          </button>
        )}
        {formState === 4 && (
          <div className="flex items-center space-x-[20px]">
            <button
              className="bg-[#6750A4] text-white flex items-center space-x-[10px] p-[10px_50px] rounded-[20px]  font-roboto text-[16px]"
              // onClick={() => setFormState(formState + 1)}
            >
              <SaveAdd />
              <span> Save as Draft</span>
            </button>
            <button
              className="bg-[#B3261E] text-white flex items-center space-x-[10px] p-[8px_50px] rounded-[20px]  font-roboto text-[16px]"
              // onClick={() => setFormState(formState + 1)}
            >
              <TickCircle />
              <span> Confirm & Submit Order</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-[20px] rounded-[20px]">
      <div>
        <div className="w-full p-[15px] font-roboto border-[#6750A4] rounded-[20px] border-dashed border-[2px]">
          <p className="text-[#6750A4] font-[400] text-[26px]">
            Creating New Order
          </p>
        </div>
        <div className="flex items-center space-x-[20px]">
          {stateLabel.map((item, index) => (
            <div
              key={index}
              className={`${
                formState === item.value ? "w-fit" : "w-[30px] overflow-hidden"
              } flex items-center space-x-[10px] mt-[20px]`}
            >
              <div
                className={`min-w-[30px] h-[40px] font-roboto flex items-center justify-center rounded-full text-white ${
                  formState === item.value ? "bg-[#060C2C]" : "bg-gray-300"
                }`}
              >
                {item.step}
              </div>
              <div className="text-[#060C2C] font-roboto text-[18px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[20px]">
        {formState === 0 && <Step1 />}
        {formState === 1 && <Step2 />}
        {formState === 2 && <Step3 />}
        {formState === 3 && <Step4 />}
        {formState === 4 && <Step5 />}
      </div>
      {renderButtons()}
    </div>
  );
}

export default page;

const stateLabel = [
  {
    label: "Order Information",
    value: 0,
    step: 1,
  },
  {
    label: "Package Details",
    value: 1,
    step: 2,
  },
  {
    label: "Order Recipient",
    value: 2,
    step: 3,
  },
  {
    label: "Billing Details",
    value: 3,
    step: 4,
  },
  {
    label: "Order Details Confirmation",
    value: 4,
    step: 5,
  },
  {
    label: "Success",
    value: 5,
    step: 6,
  },
];
