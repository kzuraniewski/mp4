import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello, World!');
});

app.listen(port, () => {
	console.log(`[Server]: Running at https://localhost:${port}`);
});
