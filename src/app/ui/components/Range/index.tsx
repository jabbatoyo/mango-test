"use client";
import MultiRangeSlider from "multi-range-slider-react";
//Components
import Input from "./Input";
import useRange from "./useRange";

type RangeProps = {
  editable: boolean;
};
function Range({ editable }: RangeProps) {
  const {
    min,
    max,
    minMultiRange,
    maxMultiRange,
    handlerOnChange,
    handlerOnChangeRange,
  } = useRange(editable);
  return (
    <div className="flex w-full justify-center p-[10px] bg-white">
      <div className="flex w-[900px]">
        <Input
          editable={editable}
          defaultValue={min}
          onChange={handlerOnChange}
        />
        <div className="flex items-center w-full ">
          <MultiRangeSlider
            label={false}
            min={minMultiRange}
            max={maxMultiRange}
            minValue={0}
            maxValue={600}
            ruler={false}
            step={1}
            onInput={handlerOnChangeRange}
            baseClassName="multi-range-slider"
          />
        </div>
        <Input
          editable={editable}
          defaultValue={max}
          onChange={handlerOnChange}
        />
      </div>
    </div>
  );
}

export default Range;
