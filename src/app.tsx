import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import { fetchNumber } from "./services";
import { compareValues } from "./utils";

const App = () => {
  const [number, setNumber] = useState(0);
  const [userInputValue, setUserInputValue] = useState(0);
  const [gameResult, setGameResult] = useState("");

  

  const getNumber = async () => {
    const number = await fetchNumber();
    setNumber(number.value);
  };

  useEffect(() => {
    getNumber();
  }, []);

  const checkResult = () => {
    const gameResult = compareValues(number, userInputValue);
    setGameResult(gameResult);
  };

  return (
    <>
      <Input
        name={""}
        label={""}
        value={userInputValue}
        onChange={setUserInputValue}
      />
      <Button text="New Game" onClick={getNumber} />
      <Button text="Submit" onClick={checkResult} />
      <h1>{gameResult}</h1>
    </>
  );
};

export default App;
