const snowflake = require('snowflake-sdk');
const { snowflake: config } = require('../config');

snowflake.configure({
  // Global configuration for the snowflake SDK, if needed
});

function getConnection() {
  return snowflake.createConnection({
    account: config.account,
    username: config.username,
    password: config.password,
    // Add other necessary connection configurations
  });
}

async function executeQuery(query) {
  const connection = getConnection();
  
  return new Promise((resolve, reject) => {
    connection.connect((err, conn) => {
      if (err) {
        console.error('Unable to connect: ' + err.message);
        reject(err);
      } else {
        console.log('Successfully connected to Snowflake.');
        // Execute the query
        connection.execute({
          sqlText: query,
          complete: (err, stmt, rows) => {
            if (err) {
              console.error('Failed to execute query: ' + err.message);
              reject(err);
            } else {
              resolve(rows);
            }
          },
        });
      }
    });
  });
}

module.exports = { executeQuery };
