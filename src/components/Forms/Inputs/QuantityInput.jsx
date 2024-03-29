'use client'

import { AddSquare, MinusSquare } from "iconsax-react";

const QuantityInput = ({ id, label, quantity, index }) => {
 

  const handleSubtract = () => {
   
  };

  const handleAdd = () => {
    
  };

  return (
    <div className="relative flex w-full flex-col">
      <div className="relative z-0">
        <button
          type="button"
          className="absolute left-2 top-2 z-10 flex items-center justify-center rounded-[6.25rem] p-2 hover:bg-surface-300 focus:bg-surface-400"
        >
          <MinusSquare size="24" color="#292d32" variant="Outline" />
        </button>

        <button
          type="button"
          className="absolute right-2 top-2 z-10 flex items-center justify-center rounded-[6.25rem] p-2 hover:bg-surface-300 focus:bg-surface-400"
        >
          <AddSquare size="24" color="#292d32" variant="Outline" />
        </button>

        <input
          type="number"
          step="1"
          aria-label={label}
          name={id}
          id={id}
          className="relative block h-14 w-full overflow-x-auto rounded-[20px] border border-gray-500 bg-neutral-10 px-14 py-2 text-center leading-5 focus:border-2 focus:border-primary-600 focus:outline-none focus:ring-0"
          placeholder=" "
          value=''
          readOnly
        />

        <label className="bg-white absolute left-4 top-4 z-10 origin-[0] -translate-y-7 scale-75 transform bg-neutral-10 px-1 tracking-[.03125em] text-gray-500 duration-300">
          {label}
        </label>
      </div>
      <div className="hidden px-4 pt-1 text-xs tracking-[0.4px]">
        Supporting text
      </div>
    </div>
  );
};

export default QuantityInput;
