export const compareValues = (firstValue: number, secondValue: number) => {
  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);
  if (firstNumber === secondNumber) {
    return "Equal";
  } else if (firstNumber < secondNumber) {
    return "Smaller";
  } else if (firstNumber > secondNumber) {
    return "Bigger";
  } else return "Error";
};
