"use client";
import React from "react";
import Input from "./Input";
import useRange from "./useRange";

export type RangeSliderProps = {
  type: "fixed" | "normal";
  rangeValues?: number[];
  minRange?: number;
  maxRange?: number;
};

const defaultProps = {
  type: "fixed",
  rangeValues: [10, 20, 40, 50, 60, 70, 80, 90, 100],
  minRange: 0,
  maxRange: 100,
};

const RangeComponent = ({
  rangeValues,
  type,
  minRange,
  maxRange,
}: RangeSliderProps) => {
  const propsValues = {
    rangeValues: rangeValues ?? defaultProps.rangeValues,
    type,
    minRange: minRange ?? defaultProps.minRange,
    maxRange: maxRange ?? defaultProps.maxRange,
  };

  const {
    minValue,
    maxValue,
    progressBarLeft,
    progreessBarWidht,
    rounderMin,
    rounderMax,
    handleMouseMove,
    handleMouseUp,
    handleMaxMouseDown,
    handleMinMouseDown,
    onMouseLeave,
    handlerOnChange,
  } = useRange(propsValues);

  return (
    <div
      className="flex w-full justify-center p-[10px] bg-white"
      data-testid="ranger-container"
    >
      <div
        className="flex w-[900px] relative h-[80px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div className="slider-values absolute top-0 w-full flex justify-between">
          <Input
            name="min"
            editable={type === "normal"}
            value={minValue}
            onChange={handlerOnChange}
          />
          <Input
            name="max"
            editable={type === "normal"}
            value={maxValue}
            onChange={handlerOnChange}
          />
        </div>
        <div className="absolute top-[50%] transform-y-[-50%] w-full h-[4px] bg-[#f1f1f1] rounded-[2px]">
          <div
            className={`absolute top-0 left-0 h-full bg-black rounded-[2px]`}
            style={{ left: progressBarLeft, width: progreessBarWidht }}
          />
          <div
            className="absolute w-[16px] h-[16px] rounded-full bg-black top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            style={{ left: rounderMin }}
            onMouseDown={handleMinMouseDown}
          />
          <div
            className="absolute w-[16px] h-[16px] rounded-full bg-black top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            style={{ left: rounderMax }}
            onMouseDown={handleMaxMouseDown}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeComponent;
