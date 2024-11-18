import { useState } from "react";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const handlerCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handlerCopy}>Copy</button>
    </div>
  );
};

export default CopyInput;
