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
  const [winTextColor, setWinTextColor] = useState("#ef6c00");
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isErroed, setIsErroed] = useState(false);

  const extractDigits = (number: number) => {
    const digits = number.toString().split("");
    return digits.map(Number);
  };

  const startGame = async () => {
    setIsGameRunning(true);
    setWinTextColor("#ef6c00");
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
      if (gameResult === "Você acertou!!!") {
        setWinTextColor("#32BF00");
      }
      if (gameResult === "Você acertou!!!" || isErroed) {
        setIsGameRunning(false);
      }
      setGameResult(gameResult);
    }
  };
  return (
    <>
      <Text
        backgroundColor=""
        backgroundImage="linear-gradient(174.92deg, #ef6c00, #db6300)"
        fontSize="24px"
        text="QUAL É O NÚMERO?"
      />
      <Text
        backgroundColor={winTextColor}
        backgroundImage="red"
        fontSize="16px"
        text={`${gameResult}`}
      ></Text>
      <NumberContainer numbers={digits} />
      <div className="new-match-container">
        <Button
          width="130px"
          height="42px"
          color="linear-gradient(180deg, #434854 0%, #9E9E9E 100%);"
          text="NOVA PARTIDA"
          onClick={startGame}
        />
      </div>
      <div className="input-container">
        <Input
          isDisabled={!isGameRunning}
          type="number"
          placeholder="   Digite seu palpite"
          value={String(userInputValue) ?? ""}
          onChange={setUserInputValue}
        />
        <Button
          isDisabled={!isGameRunning}
          width="70px"
          height="42px"
          color="linear-gradient(180deg, #EF6C00 0%, #C0661C 100%);"
          text="ENVIAR"
          onClick={checkResult}
        />
      </div>
    </>
  );
};

export default App;
