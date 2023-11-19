import { useRef } from "react";

function App() {
  // #ref dom-node 참조
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} id="ref" />
      <button onClick={focus}>집중</button>
    </div>
  );
}

export default App;
