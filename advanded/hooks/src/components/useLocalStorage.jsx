import { useState } from "react";
import { useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
  );
  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name]);
  return [name, setName];
};

export default useLocalStorage;
