import React from 'react';

function ToggleButton(props) {
    return(
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            display: 'inline-block',
            marginTop: '15px'
        }}>
            <h4 style={{margin: '0 0 10px 0'}}>
                Child Component Sees Status: {props.currentStatus ? 'ACTIVE' : 'INACTIVE'}
            </h4>
            <button
                onClick={props.onToggleAction}
                style={{
                    padding: '8px 16px',
                    backgroundColor: props.currentStatus ? '#2ecc71' : '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Click Child to Toggle Parent State
            </button>
        </div>
    );
}

export default ToggleButton;