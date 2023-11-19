import { useRef } from "react";
import MyDaughter from "./MyDaughter";
import MySon from "./MySon";
import MyFriend from "./MyFriend";

function App() {
  // #ref dom-node 참조
  const refDaughter = useRef();
  const refSon = useRef();
  const refFriend = useRef();

  const focusDaughter = () => {
    refDaughter.current.focus();
  };
  const focusSon = () => {
    refSon.current.focus();
  };
  const focusFriend = () => {
    refFriend.current.focus();
  };

  return (
    <div>
      {/* <input ref={inputRef} id="ref" /> */}
      <MyDaughter ref={refDaughter} />
      <button onClick={focusDaughter}>집중</button>
      <br></br>
      <MySon ref={refSon} />
      <button onClick={focusSon}>집중</button>
      <br></br>
      <MyFriend friendRef={refFriend} />
      <button onClick={focusFriend}>집중</button>
    </div>
  );
}

export default App;
