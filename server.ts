import express, { Express } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

const distDir = path.resolve(__dirname, 'dist');
const entryPoint = path.resolve(__dirname, 'dist', 'index.html');

const PORT = process.env.PORT || 3000;

app.use(express.static(distDir));
app.use('*', (_, res) => {
  res.sendFile(entryPoint);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
