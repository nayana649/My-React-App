import React, { useState, useEffect } from 'react';

function ApiFetcher() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error Fetching Data:", error);
                setLoading(false);
            });

    }, []);

    return(
        <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif'}}>
            <h2 style={{color: '#2c3e50'}}>Program 11: API Fetching Data</h2>
            <p style={{color: '#7f8c8d'}}>Retrieving live data from an external server using useEffect</p>

            {loading ? (
                <div style={{fontSize: '18px', fontWeight: 'bold', color: '#3498db', margin: '40px'}}>
                    Loading Server Data... Please Wait...
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    maxWidth: '900px',
                    margin: '20px auto'
                }}>
                    {user.map((user) => (
                        <div key={user.id} style={{
                            padding: '15px',
                            backgroundColor: '#fff',
                            border: '1px solid #dcdde1',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            textAlign: 'left'
                        }}>
                            <h3 style={{margin: '0 0 10px 0', color: '#2c3e50'}}>{user.name}</h3>
                            <p style={{margin: '5px 0', color: '#7f8c8d', fontSize: '14px'}}><strong>Email:</strong> {user.email}</p>
                            <p style={{margin: '5px 0', color: '#7f8c8d', fontSize: '14px'}}><strong>Company:</strong> {user.company.name}</p>
                            <p style={{margin: '5px 0', color: '#7f8c8d', fontSize: '14px'}}><strong>Website:</strong> {user.website}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ApiFetcher;