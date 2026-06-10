import React, { useState } from 'react';

function ConditionalRender() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', border: '2px dashed #e67e22', borderRadius: '10px', margin: '20px'}}>
            <h2 style={{color: '#2c3e50'}}>Program 9: Conditional Rendering</h2>
            <p style={{color: '#7f8c8d'}}>Displaying elements dynamically based on State Conditions</p>

            <div style={{margin: '30px 0', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
                <h3>
                    {isLoggedIn ? 'Welcome back, User!' : 'Please log in to continue.'}
                </h3>
            </div>

            {isLoggedIn && (
                <div style={{
                    padding: '15px',
                    margin: '20px auto',
                    maxWidth: '300px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: 'bold'
                }}>
                    Secret Content: You have access to exclusive features!
                </div>
            )}
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: isLoggedIn ? '#e74c3c' : '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}
                >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>   
        </div>
    );
}

export default ConditionalRender;