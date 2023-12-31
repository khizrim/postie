import express, { Express } from 'express';

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static('./dist'));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
