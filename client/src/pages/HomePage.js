import React, { useState } from 'react';
import Editor from '../components/Editor';
import ResultsTable from '../components/ResultsTable';
import DatabaseSwitcher from '../components/DatabaseSwitcher';

const HomePage = () => {
  const [currentDatabase, setCurrentDatabase] = useState('BigQuery');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ columns: [], rows: [] });

  const databases = ['BigQuery', 'Snowflake'];

  const executeQuery = () => {
    console.log(`Executing query on ${currentDatabase}: ${query}`);
  };

  return (
    <div>
      <h1>SQL Editor</h1>
      <DatabaseSwitcher
        databases={databases}
        currentDatabase={currentDatabase}
        onSwitch={setCurrentDatabase}
      />
      <Editor value={query} onChange={setQuery} />
      <button onClick={executeQuery}>Run Query</button>
      <ResultsTable results={results} />
    </div>
  );
};

export default HomePage;
