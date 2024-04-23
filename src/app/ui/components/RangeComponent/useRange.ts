"use client";
import { useFiltersContext } from "@/app/context";
import { formatRangeArrayValues } from "@/app/lib/utils";
import { MouseEvent, useState } from "react";

type RangeHookProps = {
  type: "fixed" | "normal";
  rangeValues: number[];
  minRange: number;
  maxRange: number;
};

function useRange({
  type,
  rangeValues = [],
  minRange,
  maxRange,
}: RangeHookProps) {
  const { setRanges } = useFiltersContext();
  const newRangeValues = formatRangeArrayValues(rangeValues);
  const min = type === "fixed" ? newRangeValues[0] : minRange;
  const max =
    type === "fixed" ? newRangeValues[newRangeValues.length - 1] : maxRange;

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [minFixValue, setMinFixValue] = useState(min);
  const [maxFixValue, setMaxFixValue] = useState(max);
  const [minMultiRange, setMinMultiRange] = useState(min);
  const [maxMultiRange, setMaxMultiRange] = useState(max);

  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);

  const handleMinMouseDown = () => {
    setIsDraggingMin(true);
  };

  const handleMaxMouseDown = () => {
    setIsDraggingMax(true);
  };

  const handleRangeNormlMouseMove = (e: MouseEvent) => {
    if (isDraggingMin || isDraggingMax) {
      const { rect, offsetX } = getElementTargetData(e);
      if (isDraggingMin) {
        const newMinValue = Math.min(
          maxValue - 10,
          Math.max(
            0,
            Math.round(
              (offsetX / rect.width) * (maxMultiRange - minMultiRange)
            ) + minMultiRange
          )
        );
        setRanges(newMinValue, maxValue);
        setMinValue(newMinValue);
      } else {
        const newMaxValue = Math.max(
          minValue + 10,
          Math.min(
            maxMultiRange,
            Math.round(
              (offsetX / rect.width) * (maxMultiRange - minMultiRange)
            ) + minMultiRange
          )
        );
        setRanges(minValue, newMaxValue);
        setMaxValue(newMaxValue);
      }
    }
  };

  const handleRangeFixedMouseMove = (e: MouseEvent) => {
    if (isDraggingMin || isDraggingMax) {
      const { rect, offsetX } = getElementTargetData(e);
      const percentage = offsetX / rect.width;
      const closestIndex = getClosestIndex(percentage);
      if (isDraggingMin) {
        const newMinValue = newRangeValues[closestIndex];
        if (maxMultiRange - newMinValue >= 1) {
          setMinMultiRange(newMinValue);
          setMinValue(newMinValue);
          setRanges(newMinValue, null);
        }
      } else {
        const newMaxValue = newRangeValues[closestIndex];
        if (newMaxValue - minMultiRange >= 1) {
          setMaxMultiRange(newMaxValue);
          setMaxValue(newMaxValue);
          setRanges(null, newMaxValue);
        }
      }
    }
  };

  const getClosestIndex = (percentage: number) => {
    const value = minFixValue + percentage * (maxFixValue - minFixValue);
    let closestIndex = 0;
    let closestDiff = Infinity;
    for (let i = 0; i < newRangeValues.length; i++) {
      const diff = Math.abs(newRangeValues[i] - value);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = i;
      }
    }
    return closestIndex;
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "max") {
      setRanges(minValue, Number(value));
      setMaxValue(Number(value));
      setMaxMultiRange(Number(value));
    }
    if (name === "min") {
      setRanges(Number(value), maxValue);
      setMinValue(Number(value));
      setMinMultiRange(Number(value));
    }
  };

  const getElementTargetData = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    return {
      rect,
      offsetX,
    };
  };

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  const progressBarLeft = () => {
    return type === "fixed"
      ? `${((minMultiRange - minValue) / (maxValue - minValue)) * 100}%`
      : `${
          ((minValue - minMultiRange) / (maxMultiRange - minMultiRange)) * 100
        }%`;
  };

  const progreessBarWidht = () => {
    return type === "fixed"
      ? `${
          ((maxMultiRange - minMultiRange) / (maxFixValue - minFixValue)) * 100
        }%`
      : `${((maxValue - minValue) / (maxMultiRange - minMultiRange)) * 100}%`;
  };

  const rounderMin = () => {
    return type === "fixed"
      ? `${
          ((minMultiRange - minFixValue) / (maxFixValue - minFixValue)) * 100
        }%`
      : `${
          ((minValue - minMultiRange) / (maxMultiRange - minMultiRange)) * 100
        }%`;
  };

  const rounderMax = () => {
    return type === "fixed"
      ? `${
          ((maxMultiRange - minFixValue) / (maxFixValue - minFixValue)) * 100
        }%`
      : `${
          ((maxValue - minMultiRange) / (maxMultiRange - minMultiRange)) * 100
        }%`;
  };

  return {
    minValue,
    maxValue,
    minMultiRange,
    maxMultiRange,
    handleMinMouseDown,
    handleMaxMouseDown,
    onMouseLeave: handleMouseUp,
    handleMouseMove:
      type === "fixed" ? handleRangeFixedMouseMove : handleRangeNormlMouseMove,
    handleMouseUp,
    progressBarLeft: progressBarLeft(),
    progreessBarWidht: progreessBarWidht(),
    rounderMin: rounderMin(),
    rounderMax: rounderMax(),
    handlerOnChange,
  };
}

export default useRange;
