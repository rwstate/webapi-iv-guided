const server = require('./api/server.js');


const port = process.env.port || 4000;
server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
