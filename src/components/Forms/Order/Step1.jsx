'use client'
import ChevronRight from "../../Icons/ChevronRight";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";


function Step1() {
  

  return (
    <>
      <div className="flex items-center space-x-[10px] border-b-[2px] pb-[10px]">
        <ChevronRight />
        <p className="font-roboto font-[500] text-[14px] ">
          Fill in the order & customer details
        </p>
      </div>
      <div className="flex flex-col gap-[30px] mt-[30px]">
        <div>
          <TextInput
            label="Assigned Customer"
            id="assignedCustomer"
            value=''
            
          />
        </div>

        <div className="grid grid-cols-2 gap-[30px]">
          <div>
            <SelectInput
              id="order"
              label="Order Type"
              value=''
              options={
                <>
                  <option value="" className="">
                    Select order type
                  </option>
                  <option value="shipment" className="">
                    Shipment
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="status"
              label="Order Status"
              value=''
              options={
                <>
                  <option value="" className="">
                    Select order status
                  </option>
                  <option value="under-process" className="">
                    Under Process
                  </option>
                </>
              }
            />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <SelectInput
              id="order"
              label="Service"
              value=''
              options={
                <>
                  <option value="" className="">
                    Select Service
                  </option>
                  <option value="import" className="">
                    Import
                  </option>
                  <option value="export" className="">
                    Export
                  </option>
                  <option value="import-auto" className="">
                    Import Auto
                  </option>
                  <option value="shop-for-me" className="">
                    Shop For Me
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="order"
              label="Shipment Method"
              value=''
              options={
                <>
                  <option value="" className="">
                    Select Shipment Method
                  </option>
                  <option value="air" className="">
                    Air
                  </option>
                  <option value="water" className="">
                    Water
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="status"
              label="Delivery Company"
              options={
                <>
                  <option value="" className="">
                    Select Delivery Company
                  </option>
                  <option value="dhl" className="">
                    DHL
                  </option>
                  <option value="ups" className="">
                    UPS
                  </option>
                </>
              }
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Step1;
