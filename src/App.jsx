import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>My React Learning Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Tracking my progress line by line</p>
      <hr style={{ border: '1px solid #dcdde1', margin: '20px 0' }} />

      {/* Program 1: Static Component */}
      <HelloWorld />

      <hr style={{ border: '1px solid #dcdde1', margin: '30px 0' }} />

      {/* Program 2: State Component */}
      <Counter />
      
    </div>
  );
}

export default App;