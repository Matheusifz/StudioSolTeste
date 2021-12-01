import { useEffect } from "react";
import { fetchNumber } from "./services";

const App = () => {
  useEffect(() => {
    const getNumber = async () => {
      const number = await fetchNumber();
      console.log(number);
    };
    getNumber();
  });
  return <h1>Oi</h1>;
};

export default App;
