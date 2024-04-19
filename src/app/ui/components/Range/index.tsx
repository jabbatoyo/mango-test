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
    minInput,
    maxInput,
    minMultiRange,
    maxMultiRange,
    handlerOnChange,
    handlerOnChangeRange,
  } = useRange(editable);

  return (
    <div
      className="flex w-full justify-center p-[10px] bg-white"
      data-testid="ranger-container"
    >
      <div className="flex w-[900px]">
        <Input
          name="min"
          editable={editable}
          defaultValue={minInput}
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
            onChange={handlerOnChangeRange}
            baseClassName="multi-range-slider"
          />
        </div>
        <Input
          name="max"
          editable={editable}
          defaultValue={maxInput}
          onChange={handlerOnChange}
        />
      </div>
    </div>
  );
}

export default Range;
