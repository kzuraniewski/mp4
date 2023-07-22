import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello, World!');
});

app.listen(port, () => {
	console.log(`[Server]: Running at https://localhost:${port}`);
});
