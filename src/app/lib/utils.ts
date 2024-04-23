export const formatRangeArrayValues = (rangeValues: number[]) => {
  const minValue = rangeValues[0];
  const maxValue = rangeValues[rangeValues.length - 1];
  const intervalNumber = rangeValues.length - 1;
  const increment = (maxValue - minValue) / intervalNumber;

  let newRangeValue: number[] = [];
  for (let i = 0; i <= intervalNumber; i++) {
    newRangeValue.push(parseFloat((minValue + i * increment).toFixed(2)));
  }
  return newRangeValue;
};
