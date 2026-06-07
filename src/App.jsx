import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import TextMirror from './TextMirror';
import ToggleBox from './ToggleBox'; // 1. Imported Program 4

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>My React Learning Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Tracking my progress line by line</p>
      <hr style={{ border: '1px solid #dcdde1', margin: '20px 0' }} />

      <HelloWorld />

      <hr style={{ border: '1px solid #dcdde1', margin: '30px 0' }} />

      <Counter />

      <hr style={{ border: '1px solid #dcdde1', margin: '30px 0' }} />

      <TextMirror />

      <hr style={{ border: '1px solid #dcdde1', margin: '30px 0' }} />

      {/* 2. Display Program 4 */}
      <ToggleBox />
      
    </div>
  );
}

export default App;