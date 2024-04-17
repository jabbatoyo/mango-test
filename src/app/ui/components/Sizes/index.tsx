"use client";
//Hooks
import { useFiltersContext } from "@/app/context";

function Sizes() {
  const { setSizes } = useFiltersContext();
  const sizes = ["XS", "S", "M", "L", "XL"];

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) setSizes((pre) => [...pre, value]);
    else setSizes((pre) => [...pre.filter((size) => size !== value)]);
  };

  return (
    <div className="flex justify-center items-center mb-[10px]">
      <div className="flex w-auto">
        {sizes.map((item, index) => {
          return (
            <div
              className="flex flex-col mr-[20px] last:mr-0 items-center"
              key={index}
            >
              <input
                name=""
                className="w-[20px] h-[20px] cursor-pointer accent-[#000]"
                type="checkbox"
                value={item}
                onChange={handlerOnChange}
              />
              <span className="text-[12px]">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sizes;
