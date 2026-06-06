import React, {useState}from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style = {{textAlign: 'center', marginTop: '20px', fontSize: '24px', color: 'blue', fontFamily: 'Arial, sans-serif'}}>
            <h2 style = {{color: '#2c3e50' }}>Program 2: Interactive Counter</h2>
            <p style = {{fontSize: '32px', fontWeight: 'bold' }}>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)} style = {{padding: '10px 20px', fontSize: '18px'}}>
                Increase (+)
            </button>
            <button onClick = {() => setCount(count - 1)} style = {{padding: '10px 20px', fontSize: '18px'}}>
                Decrease (-)
            </button>

        </div>
    );
}
export default Counter;