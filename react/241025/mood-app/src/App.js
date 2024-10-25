import MenuList from "./Components/MenuList/MenuList";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import { useState } from "react";


function App() {

  const [currentMood, setCurrentMood] = useState("");

  console.log(currentMood);

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요!</h1>
      <article>
        <MenuList setMood={setCurrentMood} mood={currentMood} />
        <DisplayMood mood={currentMood} />
      </article>
    </div>
  );
}
export default App;
