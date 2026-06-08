import React from 'react';

function ProfileCard(props) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            display: 'inline-block',
            width: '220px',
            textAlign: 'left'
        }}>
            <h3 style={{margin: '0 0 10px 0', color: '#2c3e50'}}> {props.name} </h3>
            <p style={{margin: '5px 0', color: '#7f8c8d'}}><strong>Role: </strong>{props.role}</p>
            <p style={{margin: '5px 0', color: '#7f8c8d'}}><strong>Company: </strong>{props.company}</p>
        </div>
    );
}

export default ProfileCard;