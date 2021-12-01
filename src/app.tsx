import { useEffect, useState } from "react";
import { fetchNumber } from "./services";

const App = () => {
  const [number, setNumber] = useState(null);
  useEffect(() => {
    const getNumber = async () => {
      const number = await fetchNumber();
      setNumber(number.value);
    };
    getNumber();
  }, []);
  return <h1>{number}</h1>;
};

export default App;
