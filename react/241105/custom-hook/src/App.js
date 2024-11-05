import InputComponent from "./Components/InuptComponent";
import SomethingComponent from "./Components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useIsBottom from "./Hook/useIsBottom";

function App() {

  const isBottom = useIsBottom();

  console.log(isBottom);

  return (
    <div style={{ height: '200vh', backgroundColor: "springgreen" }}>

    </div>
  );
}
export default App;
