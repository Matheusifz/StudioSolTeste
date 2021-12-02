export const compareValues = (firstValue: number, secondValue: number) => {
  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);
  if (firstNumber === secondNumber) {
    return "Você acertou!!!";
  } else if (firstNumber < secondNumber) {
    return "É menor";
  } else if (firstNumber > secondNumber) {
    return "É maior";
  } else return "Erro";
};
