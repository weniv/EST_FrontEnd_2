import { useState } from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: 1234
  }

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <Home setLogin={setIsLogin} /> : < Login userInfo={user} setLogin={setIsLogin} />
      }
    </>
  );

}

export default App;