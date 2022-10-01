import numeral from "numeral";

export const shortNumberFormat = (number: number) => {
  if (number > 1000) {
    return numeral(number).format("0.0a");
  }
  return number;
};

export const numberDecimal = (number: number, decimal: number) => {
  return number.toFixed(decimal);
};

export const average = (numberList: number[]) => {
  const sum = numberList.reduce((a, b) => a + b, 0);
  const average = sum / numberList.length || 0;

  return numberDecimal(average, 1);
};
