import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount((v) => v + 1);
  }, []);

  return { count, addCount };
};
