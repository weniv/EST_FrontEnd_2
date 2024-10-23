import logo from './logo.svg';
import './App.css';

function TestComponent() {

}

function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{ backgroundColor: "blue" }}
      />
    </div>
  );
}

function 함수() {
  return '함수!!!';
}

const 값 = true;

function App() {

  const name = 'licat';
  const myStyle = { backgroundColor: "yellow" };

  return (
    <div>
      {100 + 1}
      {'hello' + 'world'}
      {[1, 2, 3].map(x => x ** 2)}
      {[3, 4, 5]}
      {함수()}
      {name}
      {값 ? 'one' : 'two'}

      <TestComponent />
      {/**aslfjaljdfl */}
      {name}
      <input className="newClass" style={myStyle} type="text" maxLength="10" name="hello" />
      <input type="checkbox" isblue="true" className="inpCheck" />
      <img src="" alt="" />


      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
      <div className="App">
        <h1>HELLO EST SOFT!!!</h1>
      </div>
    </div>
  );
}

export default App;
