import React from 'react';
import './App.css';

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function DlList() {

  const listItems = items.map((item) => {
    return (
      <div key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </div>
    );
  });

  return (
    <dl>
      {listItems}
    </dl>
  );
}


function App() {
  return (
    <DlList />
  );
}
export default App;
