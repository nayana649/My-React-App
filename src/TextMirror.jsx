import React, { useState } from 'react';

function TextMirror() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style= {{textAlign: 'center', marginTop: '20px', fontSize: '24px', color: 'red', fontFamily: 'Arial, sans-serif'}}>
            <h2 style = {{color: '#2c3e50'}}>Program 3: Text Mirror</h2>
            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={handleChange}
                style={{padding: '10px', color: 'blue'}}
            />
            <p style={{fontSize: '32px', color: 'yellow'}}>
                <strong>What you typed?</strong> {text || "..."}
            </p>
        </div>
    );
}

export default TextMirror;