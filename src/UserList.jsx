import React from 'react';

function UserList() {
    const developers = [
        { id: 1, name: 'Nayana', company: 'Google', role: 'Software Engineer'},
        { id: 2, name: 'Gagan', company: 'Microsoft', role: 'Product Manager'},
        { id: 3, name: 'Priya', company: 'Amazon', role: 'Data Scientist'},
        { id: 4, name: 'Raj', company: 'Apple', role: 'UX Designer'}
    ];
    return (
       <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif'}}>
        <h2 style={{color: '#2c3e50'}}>Program 8: Dynamic Array Re-rendering</h2>
        <p style={{color: '#34495e'}}>This program demonstates Re-rendering of an Array. </p>
        <div style={{maxWidth: '400px', margin: '20px auto', textAlign: 'left'}}>
            {developers.map((dev) => (
                <div 
                    key={dev.id}
                    style={{
                        padding: '12px 15px',
                        margin: '10px 0',
                        backgroundColor: '#ecf0f1',
                        borderRadius: '6px',
                        borderLeft: '5px solid #3498db'
                    }}
                >
                    <h4 style={{margin: '0 0 5px 0', color: '#2c3e50'}}>{dev.name}</h4>
                    <p style={{margin: '0', color: '#34495e'}}>
                        <strong>{dev.role}</strong> at {dev.company}
                    </p>
                </div>
            ))}
        </div>
       </div>
    );
}

export default UserList;