import express, { Express } from 'express';

const app: Express = express();
const port = 3000;

app.use('/', express.static('./dist'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
