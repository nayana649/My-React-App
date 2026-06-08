import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(["Learn React Basics", "Build a Creative App"]);
    const [inputValue, setInputValue] = useState("");
    const handleAddTask = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };
    
    return (
        <div style={{padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
            <h2 style={{color: '#333'}}>My Todo List</h2>
            <div style={{marginBottom: '20px'}}>
                <input 
                    type='text'
                    placeholder='Enter a New Task'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{padding: '10px', width: '70%', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc'}}/>
                    <button 
                        onClick={handleAddTask}
                        style={{padding: '10px 15px', fontSize: '16px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer'}}>
                            Add Task
                        </button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
            {todos.map((task, index) => (
            <li 
                key={index} 
                style={{ padding: '10px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee', marginBottom: '5px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}
            >
                🔹 {task}
            </li>
            ))}
            </ul>
        </div>

    );
}

export default TodoList;
