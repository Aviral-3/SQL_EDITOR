const { BigQuery } = require('@google-cloud/bigquery');
const { bigQuery } = require('../config');

const bigqueryClient = new BigQuery({
  projectId: bigQuery.projectId,
  keyFilename: bigQuery.keyFilename,
});

async function executeQuery(query) {
  const options = {
    query: query,
    location: 'US',
  };

  const [job] = await bigqueryClient.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  const [rows] = await job.getQueryResults();
  return rows;
}

module.exports = { executeQuery };
