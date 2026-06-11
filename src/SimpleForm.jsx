import React, { useState } from 'react';

function SimpleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Profile Created Successfully!!\nName: ${name}\nEmail: ${email}`);
    };

    return (
        <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif'}}>
            <h2 style={{color: '#2c3e50'}}>Program 10: Controlled Inputs & Forms</h2>
            <p style={{color: '#7f8c8d'}}>Capturing and Controlling the user input fields using React State</p>

            <form 
                onSubmit={handleSubmit}
                style={{maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #dcdde1', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'left'}}
            >
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#2c3e50'}}>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#2c3e50'}}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
                    />
                </div>
                <button type="submit" style={{backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer'}}>Create Profile</button>
            </form>
            <div style={{marginTop: '20px', padding: '10px', display: 'inline-block', border: '1px dashed #7f8c8d', borderRadius: '6px', backgroundColor: '#fff'}}>
                <strong>Live Review:</strong> {name || '___'} || {email || '___'}
            </div>
        </div>
    );
}

export default SimpleForm;