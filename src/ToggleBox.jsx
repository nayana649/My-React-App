import React, {useState} from 'react';

function ToggleBox() {
    const[isOn, setIsOn] = useState(false);
    return (
        <div style={{textAlign: 'center', marginTop: '20px', fontSize: '24px', color: 'purple'}}>
            <h2 style={{color: '#2c3e50'}}>Program 4: Toggle Box</h2>
            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: isOn? 'green' : 'red',
                margin: '0 auto 20px auto',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px',
            }}>
            </div>
            <button 
                onClick={() => setIsOn(!isOn)}
                style={{padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #8e44ad', backgroundColor: '#9b59b6', color: 'white'}}
            >
                Toggle
            </button>
        </div>
    );
}

export default ToggleBox;