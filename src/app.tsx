import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import { fetchNumber } from "./services";
import { compareValues } from "./utils";

const App = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [userInputValue, setUserInputValue] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState("");

  const startGame = async () => {
    setGameResult("");
    const number = await fetchNumber();
    setNumber(number.value);
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
      <Input
        type="number"
        placeholder="Digite seu palpite"
        value={String(userInputValue)?? ""}
        onChange={setUserInputValue}
      />
      <Button text="New Game" onClick={startGame} />
      <Button text="Submit" onClick={checkResult} />
      <h1>{gameResult}</h1>
    </>
  );
};

export default App;
