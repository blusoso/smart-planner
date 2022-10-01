import numeral from "numeral";

export const shortNumberFormat = (number: number) => {
  return numeral(number).format("0.0a");
};
