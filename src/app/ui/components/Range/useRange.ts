"use client";
import { ChangeResult } from "multi-range-slider-react";
import { useState } from "react";
//Hooks
import { useFiltersContext } from "@/app/context";

function useRange(editable: boolean) {
  const { setRanges } = useFiltersContext();
  const rangeValues = [
    10.99, 30.99, 40.99, 50.99, 90.99, 100.99, 200.99, 300.99, 400.99, 500.99,
    600,
  ];

  const [minInput, setMinInput] = useState(10);
  const [maxInput, setMaxInput] = useState(600);
  const [minMultiRange, setMinMultiRange] = useState(editable ? 10 : 0);
  const [maxMultiRange, setMaxMultiRange] = useState(editable ? 600 : 10);

  const handlerOnChangeRange = (e: ChangeResult) => {
    const minValue = editable === false ? rangeValues[e.minValue] : e.minValue;
    const maxValue = editable === false ? rangeValues[e.maxValue] : e.maxValue;
    setRanges(minValue, maxValue);
    setMinInput(minValue);
    setMaxInput(maxValue);
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "max") {
      setMaxInput(Number(value));
      setRanges(null, Number(value));
      if (editable) setMaxMultiRange(Number(value));
    }
    if (name === "min") {
      setRanges(Number(value), null);
      setMinInput(Number(value));
      if (editable) setMinMultiRange(Number(value));
    }
  };

  return {
    minInput,
    maxInput,
    minMultiRange,
    maxMultiRange,
    handlerOnChangeRange,
    handlerOnChange,
  };
}

export default useRange;
