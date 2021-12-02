export const compareValues = (firstNumber:number, secondNumber:number) => {
  if (firstNumber === secondNumber) {
    return "Equal"
  } else if (firstNumber < secondNumber) {
    return "Smaller"
  } else {
    return "Bigger"
  }
};