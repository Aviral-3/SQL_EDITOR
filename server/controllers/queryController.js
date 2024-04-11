const { bigQuery, snowflake } = require('../config');

const executeBigQuery = async (query) => {
  console.log('Executing BigQuery:', query);
  return { columns: ['id', 'name'], rows: [[1, 'Sample Data']] }; 
};

const executeSnowflakeQuery = async (query) => {
  console.log('Executing Snowflake query:', query);
  return { columns: ['id', 'name'], rows: [[1, 'Sample Data']] };
};

const executeQuery = async (req, res) => {
  const { database, query } = req.body;
  try {
    let results;
    if (database === 'bigquery') {
      results = await executeBigQuery(query);
    } else if (database === 'snowflake') {
      results = await executeSnowflakeQuery(query);
    } else {
      return res.status(400).json({ message: 'Invalid database selected' });
    }
    res.status(200).json({ data: results });
  } catch (error) {
    res.status(500).json({ message: 'Error executing query', error: error.message });
  }
};

module.exports = {
  executeQuery,
};
