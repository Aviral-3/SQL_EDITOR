import React from 'react';

const DatabaseSwitcher = ({ databases, currentDatabase, onSwitch }) => {
  return (
    <div>
      <h3>Choose Database</h3>
      <ul>
        {databases.map((db) => (
          <li key={db} style={{ fontWeight: currentDatabase === db ? 'bold' : 'normal' }}>
            <button onClick={() => onSwitch(db)}>{db}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseSwitcher;
