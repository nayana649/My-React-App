import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

function ParentController() {
    const [isActive, setIsActive] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', border: '2px dashed #9b59b6', borderRadius: '10px', margin: '20px' }}>
      <h2 style={{ color: '#2c3e50' }}>Program 7: Dynamic Props & Functions</h2>
      
      <div style={{ margin: '15px 0', fontSize: '18px' }}>
        <strong>Parent State Memory Vault:</strong> {isActive ? "HIGH POWER" : "STANDBY"}
      </div>

      <ToggleButton currentStatus={isActive} onToggleAction={toggleStatus} />
    </div>
    );
}

export default ParentController;
