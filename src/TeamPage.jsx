import React from 'react';
import ProfileCard from './ProfileCard';

function TeamPage() {
    return (
        <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', border: '2px dashed #1abc9c', borderRadius: '10px', margin: '20px'}}>
            <h2 style={{color: '#2c3e50' }}>Program 6: Team Dashboard (Props Basics)</h2>
            <p style={{color: '#7f8c8d' }}>Reusing a single layout template with distinct data properties</p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
                <ProfileCard name="Alice Johnson" role="Project Manager" company="Tech Solutions Inc."/>
                <ProfileCard name="Nayana Yaranal" role="Graduate Engineer Trainee" company="Bosch"/>
                <ProfileCard name="Bob Smith" role="Lead Developer" company="Tech Solutions Inc."/>
            </div>
        </div>    
    );
}

export default TeamPage;