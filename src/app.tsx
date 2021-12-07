import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import Input from "./components/Input";
import { Number as NumberContainer } from "./components/Number";
import { fetchNumber } from "./services";
import { compareValues } from "./utils";
import { Text } from "./components/Text";
import "./styles/global.css";

const App = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [userInputValue, setUserInputValue] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState("");
  const [digits, setDigits] = useState<Array<any>>([0]);

  const extractDigits = (number: number) => {
    const digits = number.toString().split("");
    return digits.map(Number);
  };

  const startGame = async () => {
    setGameResult("");
    const number = await fetchNumber();
    setNumber(number.value);
    setDigits(extractDigits(number.value));
  };
  useEffect(() => {
    startGame();
  }, []);

  const checkResult = () => {
    if (number && userInputValue) {
      const gameResult = compareValues(number, userInputValue);
      setGameResult(gameResult);
    }
  };

  return (
    <>
      <Text text="QUAL É O NÚMERO?" />
      <Input
        type="number"
        placeholder="Digite seu palpite"
        value={String(userInputValue) ?? ""}
        onChange={setUserInputValue}
      />
      <Button
        color="linear-gradient(180deg, #434854 0%, #9E9E9E 100%);"
        text="NOVA PARTIDA"
        onClick={startGame}
      />
      <Button
        color="linear-gradient(180deg, #EF6C00 0%, #C0661C 100%);"
        text="ENVIAR"
        onClick={checkResult}
      />
      <h2>{gameResult}</h2>
      <NumberContainer numbers={digits} />
    </>
  );
};

export default App;
