import React from 'react';

// This is a functional component named App
function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#61dafb', fontSize: '40px' }}>Hello, World!</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        My development server is up and my first React program is running!
      </p>
    </div>
  );
}

// We export the component so that main.jsx can render it on the screen
export default App;