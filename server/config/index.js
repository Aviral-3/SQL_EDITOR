require('dotenv').config(); 

const config = {
  bigQuery: {
    projectId: process.env.BIGQUERY_PROJECT_ID,
    keyFilename: process.env.BIGQUERY_KEY_FILENAME, 
  },
  snowflake: {
    account: process.env.SNOWFLAKE_ACCOUNT,
    username: process.env.SNOWFLAKE_USER,
    password: process.env.SNOWFLAKE_PASSWORD,
  },
};

module.exports = config;
