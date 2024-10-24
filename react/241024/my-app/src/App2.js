import HelloProps from "./Components/HelloProps";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
import Resume2 from "./Components/Resume2";

function App2() {
    return (
        <>
            <Resume2 />
            <ColorText color="red" />
            <ColorText color="black" />
            <ColorText color="green" />

            <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
            <HelloProps
                name="jaehyun"
                age={25}
                someFunc={() => 'awesome!!!'}
                someJSX={<img src="https://picsum.photos/id/237/200/300" />}
                someArr={[1, 2, 3]}
                someObj={{ one: 1 }} />
        </>
    );
}

export default App2;