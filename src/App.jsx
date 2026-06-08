import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import TextMirror from './TextMirror';
import ToggleBox from './ToggleBox';
import TodoList from './TodoList'; // 1. IMPORT PROGRAM 5 AT THE TOP

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '5px' }}>Official React Router Hub</h1>
        <p style={{ textAlign: 'center', color: '#7f8c8d', marginTop: '0' }}>A professional, permanent multi-page setup</p>
        
        {/* Navigation Bar */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/counter" style={linkStyle}>Counter</Link>
          <Link to="/mirror" style={linkStyle}>Text Mirror</Link>
          <Link to="/toggle" style={linkStyle}>Toggle Switch</Link>
          <Link to="/todo" style={linkStyle}>Todo List</Link> {/* Added Nav Link */}
        </nav>

        <hr style={{ border: '1px solid #dcdde1', margin: '20px 0' }} />

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <Routes>
            <Route path="/" element={<HelloWorld />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/mirror" element={<TextMirror />} />
            <Route path="/toggle" element={<ToggleBox />} />
            
            {/* 2. ADD THE ROUTE MAP RULE HERE */}
            <Route path="/todo" element={<TodoList />} />
            
            <Route path="*" element={<div style={{ textAlign: 'center' }}><h2>404 Page</h2></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const linkStyle = { padding: '10px 18px', textDecoration: 'none', backgroundColor: '#fff', color: '#2c3e50', border: '2px solid #2c3e50', borderRadius: '6px', fontWeight: 'bold' };

export default App;